import * as Actions from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: null
};

const productDetialReducer = function(state = initialState, action) {
  console.log("newProductReducer");

  switch (action.type) {
    case Actions.DETAILS_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.DETAILS_PRODUCT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    }
    case Actions.DETAILS_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default productDetialReducer;

