import ActionTypes from "../constant/constant";
const initial_state = {
  homeSlideImgs: [],
  homeIntro: [],
  projectCat: [],
  bookAllCats: []
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.homeSlideImg: {
      return { ...state, homeSlideImgs: action.payload.data };
    }
    case ActionTypes.homeIntro: {
      return { ...state, homeIntro: action.payload.data };
    }
    case ActionTypes.projectCat: {
      return { ...state, projectCat: action.payload.data }
    }
    case ActionTypes.bookAllCat: {
      return { ...state, bookAllCats: action.payload.data }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
