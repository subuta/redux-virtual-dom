import { mount, node, unmount } from 'vidom';

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

const render = inject(({dispatch, state, props}) => {
  const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    border: '1px solid red',
    width: 100 + 'px',
    height: 100 + 'px'
  };

  return node('div').attrs({id: 'app-container', className: `test${props.count}`, style: ContainerStyle}).children([
    Incrementer(),
    Counter({}, props.count),
    Decrementer()
  ]);
}, mapStateToProps);

export default () => {
  var container = document.querySelector('#app-container');
  const update = () => {
    container = document.querySelector('#app-container')
    if (!container) {return}
    mount(container, render())
  }

  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    update();
  } else {
    document.addEventListener('DOMContentLoaded', update);
  }

  // call update on store changes.
  store.subscribe(update);
}
