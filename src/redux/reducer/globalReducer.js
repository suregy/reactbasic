import actionType from './globalActionType';

//state
const globalState = {
  totalOrder: 1,
};

//reducer
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case actionType.PLUS_ORDER:
      return {
        ...state,
        totalOrder: state.totalOrder + 1,
      };
    case actionType.MINUS_ORDER:
      let totalOrder = 0;
      if (state.totalOrder > 0) {
        totalOrder = state.totalOrder - 1;
      }
      return {
        ...state,
        totalOrder: totalOrder,
      };
    default:
      return state;
  }
};

export default rootReducer;
