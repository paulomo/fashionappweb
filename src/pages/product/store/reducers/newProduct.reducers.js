import * as Actions from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: ""
};

const newProductReducer = function(state = initialState, action) {
  console.log("newProductReducer");

  switch (action.type) {
    case Actions.CREATE_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        newUser: action.payload.data,
        loading: false
      };
    }
    case Actions.CREATE_PRODUCT_FAILURE: {
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

export default newProductReducer;

