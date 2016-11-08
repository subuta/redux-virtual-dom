import * as vidom from 'vidom';

import { inject } from 'example/store.js'

import {
  decrement
} from 'example/actions/counter.js';

export default inject(({ dispatch }) => {
  return (
    <button onClick={(ev) => dispatch(decrement())}
            style={{ height: '20px' }}>
      decrement
    </button>
  );
});
