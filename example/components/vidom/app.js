import * as vidom from 'vidom';
import { mount, unmount } from 'vidom';

import store, {inject} from 'example/store.js'

import Counter from './Counter.js';
import Incrementer from './Incrementer.js';
import Decrementer from './Decrementer.js';

const render = inject(({dispatch, state}) => {
  const count = state.counter.count;
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
         className={`test${count}`}
         style={ContainerStyle}>
      <Incrementer/>
      <Counter/>
      <Decrementer/>
    </div>
  );
});

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
