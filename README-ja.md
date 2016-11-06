# redux-virtual-dom [![Build Status](https://travis-ci.org/subuta/redux-virtual-dom.svg?branch=master)](https://travis-ci.org/subuta/redux-virtual-dom) [![Coverage Status](https://coveralls.io/repos/github/subuta/redux-virtual-dom/badge.svg?branch=master)](https://coveralls.io/github/subuta/redux-virtual-dom?branch=master)
[react-redux](https://github.com/reactjs/react-redux) for your vdom library :)

- `virtual-dom`系のライブラリを利用した開発フローを簡単にします。
  - ✅[vidom](https://github.com/dfilatov/vidom)
  - ✅[snabbdom](https://github.com/paldepind/snabbdom)
  - 他の`virtual-dom`系ライブラリでも、おそらく使えます(https://github.com/Matt-Esch/virtual-dom) 
- Reduxを`virtual-dom`と組み合わせるのに便利！
- 渡された`render`はより良いパフォーマンスのためにメモ化されます! 

Demo: http://subuta.github.io/redux-virtual-dom/

[README - English](README.md)

## Installation
```
npm install redux-virtual-dom --save
```

## Documentation

基本的なコンセプトは　[react-redux](https://github.com/reactjs/react-redux/blob/master/README.md) を参考にしてます。thanks!

### `injectCreator`
`redux-virtual-dom`をインポートすると、`injectCreator`が得られます。
この`injectCreator`に`store`を渡す事で、後述の`{inject, connect}`を得ることができます。
これはreact-reduxの`Provider`コンポーネントのようなものです。

- `export const {inject, connect} = injectCreator(store)`

### `inject`
この関数は`{props, dispatch, state}`を`render`関数に注入(inject)します。
これは[deku](https://github.com/anthonyshort/deku)の実装を参考にしています。

- `inject(render, [mapStateToProps], [mapDispatchToProps]) -> render([props])`

返却された`render`関数に任意のオブジェクトを渡して呼ぶと、`props`として扱われます。
また`redux-virtual-dom`側で、storeの`dispatch/state`も同様に注入(inject)されます。

#### example
```javascript
// 自分でつくるやつ
const render = ({props, dispatch, state}) => {
  return h('div', {}, [props.counter]);
}

const wrappedRender = inject(render);

// 生成されたvirtual-domが返却される。
return wrappedRender({counter: 1});
```

### connect
この関数は`inject`の別の書き方です。[react-redux](https://github.com/reactjs/react-redux/blob/master/README.md)を
お使いの方が慣れ親しんでるであろう書き方です。

- `connect([mapStateToProps], [mapDispatchToProps])(render)`

## Example
まず`redux store`を`redux-virtual-dom`に渡します。


```javascript
// 1. どっかからreduxのstoreを取得する。
import store from './store.js';
// 2. `redux-virtual-dom`をインポートする。
import injectCreator from 'redux-virtual-dom';

// 3. `redux-virtual-dom`を呼び出しつつ、戻り値の`inject/connect`をエクスポートしておく。
export const {inject, connect} = injectCreator(store);
```

その後、得られた`connect/inject`を使って、`redux`の`dispatch/state`にどこからでもアクセスする事ができます。

```javascript
import h from 'snabbdom/h';

// 4. `inject/connect`をどこかからインポートします。(`store.js`の中がしっくり来るかも)
import {connect, inject} from 'example/store.js'

// ほかのreduxのやつ
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

//// ** [reselect](https://github.com/reactjs/reselect)も使えます。 **
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
  return h(`span`, {
    on: {
      'click': function (ev) {
        return props.dummyAction();
      }
    }
  }, [props.count]);
};

// ** react-reduxっぽい書き方が好きならこちら **
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(render);

//// dekuを参考にした記法はこちら
// export default inject(({props}) => {
//     return h(`span`, {
//       on: {
//         'click': function (ev) {
//           return props.dummyAction();
//         }
//       }
//     }, [props.count]);
//   },
//   mapStateToProps,
//   mapDispatchToProps
// );
```

詳細なサンプルは `example/components` 配下を見てみてください。
- `/vidom` -> [vidom](https://github.com/dfilatov/vidom) と [JSX](https://github.com/dfilatov/babel-plugin-vidom-jsx) プラグインを使ったサンプルです。
- `/snabbdom` -> [snabbdom](https://github.com/paldepind/snabbdom) を使ったサンプルです。
- 他(`actions/reducers/store`)は共通のredux向けのファイルです。

## Development
### 1. リポジトリをクローン

```
git clone https://github.com/subuta/redux-virtual-dom
cd ./redux-virtual-dom
```

### 2. 依存ライブラリのインストール

- Caddy (開発用Webサーバ)
- jspm@beta (パッケージ管理/ビルド)

```
brew install caddy
npm install jspm@beta -g
npm i
jspm i
```

### 3. サンプルアプリを起動

```
caddy

# open link(snabbdom example).
open http://localhost:3000/

or

# open link(vidom example).
open http://localhost:3000/vidom
```

## LICENSE
[MIT](https://opensource.org/licenses/MIT)
