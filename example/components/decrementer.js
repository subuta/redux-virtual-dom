import h from 'snabbdom/h';
import {inject} from 'example/store.js'

import {
  decrement
} from 'example/actions/counter.js';

export default inject(({dispatch}) => {
  return h(`button`, {
    on: {
      click: function (ev) {
        dispatch(decrement());
      }
    },
    style: {
      height: '20px'
    }
  }, ['decrement']);
});
