import { node } from 'vidom';

import { inject } from 'example/store.js'

import {
  decrement
} from 'example/actions/counter.js';

export default inject(({ dispatch }) => {
  return node('button').attrs({onClick: (ev) => dispatch(decrement()), style: { height: '20px' }}).children('decrement');
});
