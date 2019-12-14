import * as signUpActions from '../actions/';
import * as authService from '../../../../service/';

export function signupThunk(data) {
    console.log("signup thunk");
    return async (dispatch) => {
        dispatch(signUpActions.startSignUp());
        try {
            const user = await authService.signUp(data);
            dispatch(signUpActions.successSignUp(user));
        }catch(error){
            dispatch(signUpActions.failureSignUp(error));
        }
    }
}