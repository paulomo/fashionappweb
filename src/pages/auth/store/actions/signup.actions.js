export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_USER_FAILURE = "SIGNUP_ERROR";
export const SIGNUP_USER_SUCCESS = "SIGNUP_SUCCESS";

export function startSignUp() {
    return {
        type: SIGNUP_REQUEST,
    }
}

export function successSignUp(data) {
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: {
            ...data
        }
    }
}

export function failureSignUp(error) {
    return {
        type: SIGNUP_USER_FAILURE,
        payload: {
            error
        }
    }
}