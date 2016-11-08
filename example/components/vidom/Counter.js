import { node } from 'vidom';

import { connect, inject } from 'example/store.js'
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux'
import { getCount } from 'example/reducers/counter.js';

const dummyActions = {
  dummyAction: () => {
    return {
      type: 'dummy'
    }
  }
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(dummyActions, dispatch)
  }
};

const render = ({ props, children }) => {
  console.log('[vidom-counter] rendered');
  return node('span').attrs({onClick: (ev) => props.dummyAction()}).children(children)
};

// react-redux way
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(render);

//// ** deku flavored way **
// export default inject(({props}) => {
//     return node('span').attrs({onClick: (ev) => props.dummyAction()}).children(props.count);
//   },
//   mapStateToProps,
//   mapDispatchToProps
// );
