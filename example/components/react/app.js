import React from 'react'
import ReactDOM from 'react-dom'

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

  return (
    <div id="app-container"
         className={`test${props.count}`}
         style={ContainerStyle}>
      <Incrementer/>
      <Counter>{props.count}</Counter>
      <Decrementer/>
    </div>
  );
}, mapStateToProps);

export default () => {
  const update = () => {
    ReactDOM.render(
      render(),
      document.querySelector('#app-container')
    )
  };

  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    update();
  } else {
    document.addEventListener('DOMContentLoaded', update);
  }

  store.subscribe(update);
}
