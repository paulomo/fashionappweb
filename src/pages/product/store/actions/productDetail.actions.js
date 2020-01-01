export const DETAILS_PRODUCT_REQUEST = "DETAILS_PRODUCT_REQUEST";
export const DETAILS_PRODUCT_FAILURE = "DETAILS_PRODUCT_FAILURE";
export const DETAILS_PRODUCT_SUCCESS = "DETAILS_PRODUCT_SUCCESS";

export function detailsProductRequest() {
  return {
    type: DETAILS_PRODUCT_REQUEST
  };
}

export function detailsProductFailure(error) {
  return {
    type: DETAILS_PRODUCT_FAILURE,
    payload: {
      error
    }
  };
}

export function detailsProductSuccess(data) {
  return {
    type: DETAILS_PRODUCT_SUCCESS,
    payload: {
      ...data
    }
  };
}

export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";

export function updateProductRequest() {
  return {
    type: UPDATE_PRODUCT_REQUEST
  };
}

export function updateProductFailure(error) {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: {
      error
    }
  };
}

export function updateProductSuccess(data) {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: {
      ...data
    }
  };
}

export const REMOVE_PRODUCT_REQUEST = "REMOVE_PRODUCT_REQUEST";
export const REMOVE_PRODUCT_FAILURE = "REMOVE_PRODUCT_FAILURE";
export const REMOVE_PRODUCT_SUCCESS = "remove_PRODUCT_SUCCESS";

export function removeProductRequest() {
  return {
    type: REMOVE_PRODUCT_REQUEST
  };
}

export function removeProductFailure(error) {
  return {
    type: REMOVE_PRODUCT_FAILURE,
    payload: {
      error
    }
  };
}

export function removeProductFailure(data) {
  return {
    type: REMOVE_PRODUCT_SUCCESS,
    payload: {
      ...data
    }
  };
}
