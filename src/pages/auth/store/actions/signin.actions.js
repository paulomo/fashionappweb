export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_USER_FAILURE = "SIGNIN_ERROR";
export const SIGNIN_USER_SUCCESS = "SIGNIN_SUCCESS";

export function startSignIn() {
  return {
    type: SIGNIN_REQUEST
  };
}

export function failureSignIn(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: {
      error
    }
  };
}

export function successSignIn(data) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: {
      ...data
    }
  };
}
