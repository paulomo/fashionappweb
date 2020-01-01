export const LIST_PRODUCT_REQUEST = "LIST_PRODUCT_REQUEST";
export const LIST_PRODUCT_FAILURE = "LIST_PRODUCT_FAILURE";
export const LIST_PRODUCT_SUCCESS = "LIST_PRODUCT_SUCCESS";

export function listProductRequest() {
  return {
    type: LIST_PRODUCT_REQUEST
  };
}

export function listProductFailure(error) {
  return {
    type: LIST_PRODUCT_FAILURE,
    payload: {
      error
    }
  };
}

export function listProductSuccess(data) {
  return {
    type: LIST_PRODUCT_SUCCESS,
    payload: {
      ...data
    }
  };
}

