import ActionTypes from "../constant/constant";
const initial_state = {
  homeSlideImgs: [],
  homeIntro: [],
  projectCat: [],
  bookAllCats: [],
  onlineMasajidForms: false,
  onlineQuranPakForms: false,
  bookAllSpe: []
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
    case ActionTypes.bookAllSpe: {
      return { ...state, bookAllSpe: action.payload.data }
    }
    case ActionTypes.onlineMasajidForms: {
      return { ...state, onlineMasajidForms: action.payload }
    }
    case ActionTypes.onlineQuranPakForms: {
      return { ...state, onlineQuranPakForms: action.payload }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
