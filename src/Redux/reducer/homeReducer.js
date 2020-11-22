import ActionTypes from "../constant/constant";
const initial_state = {
  homeSlideImgs: [],
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.homeSlideImg: {
      return { ...state, homeSlideImgs: action.payload.data };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
