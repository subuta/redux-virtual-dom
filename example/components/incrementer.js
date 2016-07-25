import h from 'snabbdom/h';
import {inject} from 'example/store.js'

import {
  increment
} from 'example/actions/counter.js';

export default inject(({dispatch}) => {
  return h(`button`, {
    on: {
      click: function (ev) {
        dispatch(increment());
      }
    },
    style: {
      height: '20px'
    }
  }, ['increment']);
});
