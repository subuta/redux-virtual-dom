import snabbdom from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import propsModule from 'snabbdom/modules/props';
import styleModule from 'snabbdom/modules/style';
import eventlistenersModule from 'snabbdom/modules/eventlisteners';
import h from 'snabbdom/h';

import store, {inject} from 'example/store.js'
import { getCount } from 'example/reducers/counter.js';

import Counter from './Counter.js';
import Incrementer from './Incrementer.js';
import Decrementer from './Decrementer.js';

// redux style mapStateToProps
const mapStateToProps = (state) => {
  return {
    count: getCount(state)
  }
};

//// ** Or you can use reselect if you want **
// const mapStateToProps = createSelector(
//   getCount,
//   (count) => {
//     return {
//       count
//     }
//   }
// );

const patch = snabbdom.init([ // Init patch function with choosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventlistenersModule // attaches event listeners
]);

const render = inject(({dispatch, state, props}) => {
  return h(`div#app-container.test${props.count}`, {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      border: '1px solid red',
      width: 100 + 'px',
      height: 100 + 'px'
    }
  }, [
    Incrementer(),
    Counter({}, props.count),
    Decrementer()
  ]);
}, mapStateToProps);

export default () => {
  // Patch into empty DOM element – this modifies the DOM as a side effect
  let tree = document.querySelector('#app-container'); // We need an initial tree

  // - with diff then patch(efficient way / with vdom)
  const update = () => {
    var newTree = render();
    patch(tree, newTree);
    tree = newTree;
  };

  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    update();
  } else {
    document.addEventListener('DOMContentLoaded', update);
  }

  // call update on store changes.
  store.subscribe(update);
}
