import * as vidom from 'vidom';
import { mount, unmount } from 'vidom';

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

const mapStateToProps = (state) => {
  return {
    count: getCount(state)
  }
};

//// ** Or you can use reselect if you want **
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

const render = ({ props }) => {
  console.log('[vidom-counter] rendered');
  return (
    <span onClick={(ev) => props.dummyAction()}>
      {props.count}
    </span>
  );
};

// react-redux way
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(render);

//// ** deku flavored way **
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
