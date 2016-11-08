import React from 'react'

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

const render = ({ props }) => {
  console.log('[react-counter] rendered');
  return (
    <span onClick={(ev) => props.dummyAction()}>
      {props.children}
    </span>
  );
};

// react-redux way
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
