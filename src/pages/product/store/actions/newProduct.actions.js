export const CREATE_PRODUCT_REQUEST = "CREATE_PRODUCT_REQUEST";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";

export function createProductRequest() {
  return {
    type: CREATE_PRODUCT_REQUEST
  };
}

export function createProductFailure(error) {
  return {
    type: CREATE_PRODUCT_FAILURE,
    payload: {
      error
    }
  };
}

export function createProductSuccess(data) {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: {
      ...data
    }
  };
}

