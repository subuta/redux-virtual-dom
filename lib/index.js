import equal from 'deep-equal';

// receive redux store and return inject.
export default function(store) {
  const {dispatch, getState} = store;
  let cache = {};

  // injects store context to render function.
  const inject = (render, mapStateToProps, mapDispatchToProps) => (props = {}) => {
    const state = getState();

    // check mapper functions.
    const isChanged = !cache[render] || !equal(cache[render].lastProps, props) || !equal(cache[render].lastState, state);

    // getResult from render and state.
    const getResult = () => {
      if (mapStateToProps instanceof Function) {
        props = {...props, ...mapStateToProps(state)};
      }
      if (mapDispatchToProps instanceof Function) {
        props = {...props, ...mapDispatchToProps(dispatch)};
      }
      return render({props, state, dispatch});
    };

    // calls if not cached or has some changes in state. (memoize)
    if (isChanged) {
      cache[render] = {
        result: getResult(),
        lastProps: props,
        lastState: state
      }
    }

    return cache[render].result;
  };

  // react-redux like syntax.
  const connect = (mapStateToProps, mapDispatchToProps) => (render) => {
    return inject(render, mapStateToProps, mapDispatchToProps)
  };

  return {
    inject,
    connect
  };
};
