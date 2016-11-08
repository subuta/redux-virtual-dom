# redux-virtual-dom [![Build Status](https://travis-ci.org/subuta/redux-virtual-dom.svg?branch=master)](https://travis-ci.org/subuta/redux-virtual-dom) [![Coverage Status](https://coveralls.io/repos/github/subuta/redux-virtual-dom/badge.svg?branch=master)](https://coveralls.io/github/subuta/redux-virtual-dom?branch=master)
View framework agnostic [react-redux](https://github.com/reactjs/react-redux) :)

- Make your [Stateless component](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.4ure2ot2k) based development flow easy. work with these libraries.
  - ✅[React](https://github.com/facebook/react)
  - ✅[vidom](https://github.com/dfilatov/vidom)
  - ✅[snabbdom](https://github.com/paldepind/snabbdom)
  - Should also work with other vdom libraries(https://github.com/Matt-Esch/virtual-dom)
- Convenient utility(only ~100 line) for Redux. 
- Automatically memoize your `render` function for better performance!

Demo: http://subuta.github.io/redux-virtual-dom/

[README - 日本語版](README-ja.md)

## Installation
```
npm install redux-virtual-dom --save
```

## Documentation

Basic idea came from [react-redux](https://github.com/reactjs/react-redux/blob/master/README.md) thanks!

### `injectCreator`
when you import `redux-virtual-dom`, it gives you `injectCreator`,
you need to pass `store` to `injectCreator`, and it returns `{inject, connect}` for later use. 
this acts like react-redux's `Provider` component.  

- `export const {inject, connect} = injectCreator(store)`

### `inject`
this function injects `{props, dispatch, state}` to your own render function.
like [deku](https://github.com/anthonyshort/deku)'s way

- `inject(render, [mapStateToProps], [mapDispatchToProps]) -> render([props])`

call returned `render` with an object will passed as a `props` and
`redux-virtual-dom` will inject `dispatch/state` also.

#### example
```javascript
// your own implementation
const render = ({props, dispatch, state}) => {
  return <span>{props.counter}</span>;
}

const wrappedRender = inject(render);

// will return virtual-dom tree.
return wrappedRender({counter: 1});
```

### connect
is another syntax for `inject`. it behaves like [react-redux](https://github.com/reactjs/react-redux/blob/master/README.md)'s `connect` function.

- `connect([mapStateToProps], [mapDispatchToProps])(render)`

## Example
You need to pass your `redux store` to `redux-virtual-dom` like below.

```javascript
// 1. get redux store from somewhere
import store from './store.js';
// 2. import `redux-virtual-dom`
import injectCreator from 'redux-virtual-dom';

// 3. call `redux-virtual-dom` and export `inject/connect` for your store.
export const {inject, connect} = injectCreator(store);
```

then call `connect/inject` API from everywhere to access redux's `dispatch/state`

```javascript
import h from 'snabbdom/h';

// 4. import your `inject/connect` from somewhere(maybe in your store.js)
import {connect, inject} from 'example/store.js'

// other redux things ...
import {createSelector} from 'reselect';
import { bindActionCreators } from 'redux'
import {getCount} from 'example/reducers/counter.js';

const dummyActions = {
  dummyAction: () => {
    return {
      type: 'dummy'
    }
  }
};

const mapStateToProps = (state) => {
  return {
    count: getCount(state)
  }
};

//// ** Or you can use [reselect](https://github.com/reactjs/reselect) if you want **
// const mapStateToProps = createSelector(
//   getCount,
//   (count) => {
//     return {
//       count
//     }
//   }
// );

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(dummyActions, dispatch)
  }
};

const render = ({props}) => {
  console.log('render called!');
  return (
    <span onClick={(ev) => props.dummyAction()}>
      {props.count}
    </span>
  );
};

// ** react-redux like API for you. **
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(render);

//// ** you can do same thing as deku flavored way **
// export default inject(({props}) => {
//    return (
//      <span onClick={(ev) => props.dummyAction()}>
//        {props.children}
//      </span>
//    );
//   },
//   mapStateToProps,
//   mapDispatchToProps
// );
```

see `example/components` for full example.
- `/react` -> example of [React](https://github.com/facebook/react) with [JSX](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx) plugin.
- `/vidom` -> example of [vidom](https://github.com/dfilatov/vidom) plugin.
- `/snabbdom` -> example of [snabbdom](https://github.com/paldepind/snabbdom)
- other files are common redux files(`actions/reducers/store`)

## Development
### 1. Clone this repo

```
git clone https://github.com/subuta/redux-virtual-dom
cd ./redux-virtual-dom
```

### 2. Install dependencies

- Caddy (Web server for Development)
- jspm@beta (for package management/build)

```
brew install caddy
npm install jspm@beta -g
npm i
jspm i
```

### 3. Run example app

```
caddy

# open link(react example).
open http://localhost:3000/

or

# open link(snabbdom example).
open http://localhost:3000/snabbdom

or

# open link(vidom example).
open http://localhost:3000/vidom
```

## LICENSE
[MIT](https://opensource.org/licenses/MIT)
