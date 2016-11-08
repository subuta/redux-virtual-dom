import { node } from 'vidom';

import { inject } from 'example/store.js'

import {
  increment
} from 'example/actions/counter.js';

export default inject(({ dispatch }) => {
  return node('button').attrs({onClick: (ev) => dispatch(increment()), style: { height: '20px' }}).children('increment');
});
