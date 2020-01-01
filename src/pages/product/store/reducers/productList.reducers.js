import * as Actions from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: null
};

const productListReducer = function(state = initialState, action) {
  console.log("product list reducer");

  switch (action.type) {
    case Actions.LIST_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.LIST_PRODUCT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    }
    case Actions.LIST_PRODUCT_FAILURE: {
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

export default productListReducer;

