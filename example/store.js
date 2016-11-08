import {createStore, compose} from 'redux';
import injectCreator from 'redux-virtual-dom';

import reducer from './reducers/index.js';

const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// create inject for your store.
export const {inject, connect} = injectCreator(store);

export default store;
