import * as Actions from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: null
};

const accountReducer = function(state = initialState, action) {
  console.log("Account Reducer");

  switch (action.type) {
    // CREATE
    case Actions.CREATE_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case Actions.CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    }
    case Actions.CREATE_ACCOUNT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    // ACCOUNT DETAIL
    case Actions.DETAILS_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case Actions.DETAILS_ACCOUNT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    }
    case Actions.DETAILS_ACCOUNT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    // LIST ACCOUNTS
    case Actions.LIST_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case Actions.LIST_ACOUNT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    }
    case Actions.LIST_ACCOUNT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    // UPDATE ACCOUNT
    case Actions.UPDATE_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case Actions.UPDATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    }
    case Actions.UPDATE_ACCOUNT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    // REMOVE ACCOUNT
    case Actions.REMOVE_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case Actions.REMOVE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    }
    case Actions.REMOVE_ACCOUNT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
};

export default accountReducer;
