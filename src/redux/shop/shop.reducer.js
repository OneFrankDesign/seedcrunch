import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  params: "fruits",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    case ShopActionTypes.CHANGE_PARAMS:
      return {
        ...state,
        params: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
