import equal from 'deep-equal';

// simple hash generate function
// http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
export const hashCode = function(str) {
  // implicit conversion to str.
  const isString = str instanceof String;
  if (!isString) {
    str = str.toString();
  }

  var hash = 0, i, chr, len;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

// receive redux store and return inject.
export default function(store) {
  const {dispatch, getState} = store;
  let cache = {};

  // injects store context to render function.
  const inject = (render, mapStateToProps, mapDispatchToProps) => (props = {}, children = []) => {
    const state = getState();
    const cacheKey = hashCode(render);

    const getNextProps = (_props, _state) => {
      if (mapStateToProps instanceof Function) {
        return {..._props, ...mapStateToProps(_state, _props)};
      }
      return _props;
    };

    // check is props changed from previous call.
    const checkPropsChange = () => {
      if (mapStateToProps instanceof Function) {
        return !cache[cacheKey] || !equal(cache[cacheKey].lastProps, getNextProps(props, state));
      }
      return true;
    };

    // getResult from render and state.
    const getResult = () => {
      let nextProps = props;
      if (mapStateToProps instanceof Function) {
        nextProps = getNextProps(nextProps, state);
      }
      if (mapDispatchToProps instanceof Function) {
        nextProps = {...nextProps, ...mapDispatchToProps(dispatch, nextProps)};
      }
      return render({props: nextProps, state, children, dispatch});
    };

    // calls if not cached or has some changes in state. (memoize)
    if (checkPropsChange()) {
      cache[cacheKey] = {
        result: getResult(),
        lastProps: getNextProps(props, state)
      };
    }

    return cache[cacheKey].result;
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
