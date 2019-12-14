import * as signInActions from '../actions/';
import * as authService from '../../../../service/';

export function signinThunk(data) {
    console.log("signup thunk");
    return async (dispatch) => {
        dispatch(signInActions.startSignIn());
        try {
            const user = await authService.signIn(data);
            dispatch(signInActions.successSignIn(user));
        }catch(error){
            dispatch(signInActions.failureSignIn(error));
        }
    }
}