import injectorCreator, {hashCode} from '/lib/redux-virtual-dom.js';

describe('injectorCreator', function(){

  var state = {};
  var props = {};
  var store = {};

  beforeEach(function(){
    // define arguments
    state = {
      Counter: {
        count: 0
      }
    };

    props = {
      count: 0
    };

    store = {
      dispatch: sinon.spy(),
      getState: sinon.spy(() => state)
    };
  });

  it('should export inject creator', function(){
    assert.typeOf(injectorCreator, 'function');
  });

  it('should injectCreator creates inject/connect function', function(){
    const {inject, connect} = injectorCreator(store);

    assert.typeOf(inject, 'function');
    assert.typeOf(connect, 'function');
  });

  it('should inject injects props/dispatch/state to render', function(){
    const {inject} = injectorCreator(store);

    const render = (model) => {
      // should pass props as model.props
      assert.deepEqual(model.props, props);

      // check dispatch
      // when you call model.dispatch that should call store.dispatch
      assert.typeOf(model.dispatch, 'function');
      assert.equal(store.dispatch.called, false);
      model.dispatch();
      assert.equal(store.dispatch.called, true);

      // should call store.getState
      assert.equal(store.getState.called, true);
      // should pass store.state as model.state
      assert.deepEqual(model.state, state);
    };

    const wrappedRender = inject(render);
    wrappedRender(props);
  });

  it('should connect injects props/dispatch/state to render also', function(){
    const {connect} = injectorCreator(store);

    const render = (model) => {
      // should pass props as model.props
      assert.deepEqual(model.props, props);

      // check dispatch
      // when you call model.dispatch that should call store.dispatch
      assert.typeOf(model.dispatch, 'function');
      assert.equal(store.dispatch.called, false);
      model.dispatch();
      assert.equal(store.dispatch.called, true);

      // should call store.getState
      assert.equal(store.getState.called, true);
      // should pass store.state as model.state
      assert.deepEqual(model.state, state);
    };

    const wrappedRender = connect()(render);
    wrappedRender(props);
  });

  it('should inject accepts mapStateToProps as a second argument', function(){
    const {inject} = injectorCreator(store);

    // change state.
    state = {
      Counter: {
        count: 100
      }
    };

    store = {
      dispatch: sinon.spy(),
      getState: sinon.spy(() => state)
    };

    const mapStateToProps = (_state, _props) => {
      // should receive state.
      assert.deepEqual(state, _state);
      // should receive props.
      assert.deepEqual(props, _props);

      return {
        count: state.Counter.count
      }
    };

    const render = (model) => {
      // should pass props as model.props
      assert.deepEqual(model.props, {
        count: 100
      });

      // should pass store.state as model.state
      assert.deepEqual(model.state, state);
    };

    const wrappedRender = inject(render, mapStateToProps);
    wrappedRender(props);
  });

  it('should inject accepts mapDispatchToProps as a third argument', function(){
    store = {
      dispatch: sinon.spy((action) => action),
      getState: sinon.spy(() => state)
    };

    const {inject} = injectorCreator(store);

    const dummyAction = sinon.spy(() => {
      return {type: 'DUMMY_ACTION'};
    });

    const mapDispatchToProps = (_dispatch, _props) => {
      // should receive dispatch.
      assert.deepEqual(store.dispatch, _dispatch);
      // should receive props.
      assert.deepEqual(props, _props);

      return {
        dummyAction: (arg) => {
          _dispatch(dummyAction(arg))
        }
      }
    };

    const render = (model) => {
      // should pass props as model.props
      assert(model.props.dummyAction);
      assert.equal(dummyAction.called, false);
      assert.equal(store.dispatch.called, false);

      // call props action
      model.props.dummyAction('dummy value');

      // props action call should be bound to original one.
      assert.equal(dummyAction.called, true);
      // dispatch should be called.
      assert.equal(store.dispatch.called, true);
      // should pass-through it's arguments.
      assert.equal(dummyAction.calledWith('dummy value'), true);
    };

    const wrappedRender = inject(render, null, mapDispatchToProps);
    wrappedRender(props);
  });

  it('should not memoize render function by props if mapStateToProps not passed', function(){
    store = {
      dispatch: sinon.spy((action) => action),
      getState: sinon.spy(() => state)
    };

    const {inject} = injectorCreator(store);

    const render = sinon.spy(({props}) => {
      return `<h1>count = ${props.count}</h1>`;
    });

    const wrappedRender = inject(render);

    // render should not be called on first time
    assert.equal(render.called, false);

    // render should be called once.
    assert.equal(wrappedRender({count: 0}), '<h1>count = 0</h1>');
    assert.equal(render.calledOnce, true);

    // if props not changed, then return memoized result without calling render.
    assert.equal(wrappedRender({count: 0}), '<h1>count = 0</h1>');
    assert.equal(wrappedRender({count: 0}), '<h1>count = 0</h1>');
    assert.equal(render.callCount, 3);

    // if props changed, then call render function as usual.
    assert.equal(wrappedRender({count: 1}), '<h1>count = 1</h1>');
    assert.equal(render.callCount, 4);
  });

  it('should memoize render function by props with mapStateToProps', function(){
    const state = {
      Counter: {
        count: 0
      }
    };

    store = {
      dispatch: sinon.spy((action) => action),
      getState: sinon.spy(() => state)
    };

    const {inject} = injectorCreator(store);

    const render = sinon.spy(({props}) => {
      return `<h1>count = ${props.count}</h1>`;
    });

    const mapStateToProps = (state, props) => {
      return {
        count: state.Counter.count
      }
    };

    const wrappedRender = inject(render, mapStateToProps);

    // render should not be called on first time
    assert.equal(render.called, false);

    // render should be called once.
    assert.equal(wrappedRender({}), '<h1>count = 0</h1>');
    assert.equal(render.calledOnce, true);

    // if props not changed, then return memoized result without calling render.
    assert.equal(wrappedRender({}), '<h1>count = 0</h1>');
    assert.equal(wrappedRender({}), '<h1>count = 0</h1>');
    assert.equal(render.calledOnce, true);

    // change state directly(simulate reducer call.)
    state.Counter.count = 1;

    // if props changed, then call render function as usual.
    assert.equal(wrappedRender({}), '<h1>count = 1</h1>');
    assert.equal(render.calledTwice, true);
  });
});

describe('hashCode', function(){
  it('should return not same hashCode from different string', function(){
    assert.equal(hashCode('test'), hashCode('test'));
    assert.notEqual(hashCode('test'), hashCode('another'));
  });

  it('correctly generates hashCode from Function', function(){
    const noop = () => {};
    const noop2 = function() {};

    const testFn = function() {
      return 'test'
    };
    const sampleFn = function() {
      return 'sample'
    };

    assert.deepEqual(hashCode(noop), hashCode(noop));
    assert.notDeepEqual(hashCode(noop), hashCode(noop2));
    assert.deepEqual(hashCode(testFn), hashCode(testFn));
    assert.notDeepEqual(hashCode(testFn), hashCode(sampleFn));
  });

  it('correctly generates hashCode from Number', function(){
    assert.deepEqual(hashCode(1), hashCode(1));
    assert.notDeepEqual(hashCode(1), hashCode(2));
  });

  it('should return 0 with blank string', function(){
    assert.equal(hashCode(''), 0);
  });
});
