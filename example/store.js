import {createStore, compose} from 'redux';
import injectCreator from 'lib/redux-virtual-dom.js';

import reducer from './reducers/index.js';

const store = createStore(reducer);

// create inject for your store.
export const {inject, connect} = injectCreator(store);

export default store;
