export const CREATE_ACCOUNT_REQUEST = "CREATE_ACCOUNT_REQUEST";
export const CREATE_ACCOUNT_FAILURE = "CREATE_ACCOUNT_FAILURE";
export const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";

export function createAccountRequest() {
  return {
    type: CREATE_ACCOUNT_REQUEST
  };
}

export function createAccountFailure(error) {
  return {
    type: CREATE_ACCOUNT_FAILURE,
    payload: {
      error
    }
  };
}

export function createAccountSuccess(data) {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    payload: {
      ...data
    }
  };
}

export const LIST_ACCOUNT_REQUEST = "LIST_ACCOUNT_REQUEST";
export const LIST_ACCOUNT_FAILURE = "LIST_ACCOUNT_FAILURE";
export const LIST_ACCOUNT_SUCCESS = "LIST_ACCOUNT_SUCCESS";

export function listAccountRequest() {
  return {
    type: LIST_ACCOUNT_REQUEST
  };
}

export function listAccountFailure(error) {
  return {
    type: LIST_ACCOUNT_FAILURE,
    payload: {
      error
    }
  };
}

export function listAccountSuccess(data) {
  return {
    type: LIST_ACCOUNT_SUCCESS,
    payload: {
      ...data
    }
  };
}

export const DETAILS_ACCOUNT_REQUEST = "DETAILS_ACCOUNT_REQUEST";
export const DETAILS_ACCOUNT_FAILURE = "DETAILS_ACCOUNT_FAILURE";
export const DETAILS_ACCOUNT_SUCCESS = "DETAILS_ACCOUNT_SUCCESS";

export function detailsAccountRequest() {
  return {
    type: DETAILS_ACCOUNT_REQUEST
  };
}

export function detailsAccountFailure(error) {
  return {
    type: DETAILS_ACCOUNT_FAILURE,
    payload: {
      error
    }
  };
}

export function detailsAccountSuccess(data) {
  return {
    type: DETAILS_ACCOUNT_SUCCESS,
    payload: {
      ...data
    }
  };
}

export const UPDATE_ACCOUNT_REQUEST = "UPDATE_ACCOUNT_REQUEST";
export const UPDATE_ACCOUNT_FAILURE = "UPDATE_ACCOUNT_FAILURE";
export const UPDATE_ACCOUNT_SUCCESS = "UPDATE_ACCOUNT_SUCCESS";

export function updateAccountRequest() {
  return {
    type: UPDATE_ACCOUNT_REQUEST
  };
}

export function updateAccountFailure(error) {
  return {
    type: UPDATE_ACCOUNT_FAILURE,
    payload: {
      error
    }
  };
}

export function updateAccountSuccess(data) {
  return {
    type: UPDATE_ACCOUNT_SUCCESS,
    payload: {
      ...data
    }
  };
}

export const REMOVE_ACCOUNT_REQUEST = "REMOVE_ACCOUNT_REQUEST";
export const REMOVE_ACCOUNT_FAILURE = "REMOVE_ACCOUNT_FAILURE";
export const REMOVE_ACCOUNT_SUCCESS = "REMOVE_ACCOUNT_SUCCESS";

export function removeAccountRequest() {
  return {
    type: REMOVE_ACCOUNT_REQUEST
  };
}

export function removeAccountFailure(error) {
  return {
    type: REMOVE_ACCOUNT_FAILURE,
    payload: {
      error
    }
  };
}

export function removeAccountSuccess(data) {
  return {
    type: REMOVE_ACCOUNT_SUCCESS,
    payload: {
      ...data
    }
  };
}

export const ENABLE_ACCOUNT_REQUEST = "ENABLE_ACCOUNT_REQUEST";
export const ENABLE_ACCOUNT_FAILURE = "ENABLE_ACCOUNT_FAILURE";
export const ENABLE_ACCOUNT_SUCCESS = "ENABLE_ACCOUNT_SUCCESS";

export function enableAccountRequest() {
  return {
    type: ENABLE_ACCOUNT_REQUEST
  };
}

export function enableAccountFailure(error) {
  return {
    type: ENABLE_ACCOUNT_FAILURE,
    payload: {
      error
    }
  };
}

export function enableAccountSuccess(data) {
  return {
    type: ENABLE_ACCOUNT_SUCCESS,
    payload: {
      ...data
    }
  };
}

export const DISABLE_ACCOUNT_REQUEST = "DISABLE_ACCOUNT_REQUEST";
export const DISABLE_ACCOUNT_FAILURE = "DISABLE_ACCOUNT_FAILURE";
export const DISABLE_ACCOUNT_SUCCESS = "DISABLE_ACCOUNT_SUCCESS";

export function disableAccountRequest() {
  return {
    type: DISABLE_ACCOUNT_REQUEST
  };
}

export function disableAccountFailure(error) {
  return {
    type: DISABLE_ACCOUNT_FAILURE,
    payload: {
      error
    }
  };
}

export function disableAccountSuccess(data) {
  return {
    type: DISABLE_ACCOUNT_SUCCESS,
    payload: {
      ...data
    }
  };
}
