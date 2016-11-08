import * as vidom from 'vidom';

import { inject } from 'example/store.js'

import {
  increment
} from 'example/actions/counter.js';

export default inject(({ dispatch }) => {
  return (
    <button onClick={(ev) => dispatch(increment())}
            style={{ height: '20px' }}>
      increment
    </button>
  );
});
