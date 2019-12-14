import SignUp from '../../pages/auth/signup';
import SignIn from '../../pages/auth/signin';
import ForgotPassword from '../../pages/auth/forgotpassword';
import VerifyBrand from '../../pages/auth/verifybrand';
import ResetPassword from '../../pages/auth/resetpassword'

export const routes = [
    {
        id: "signup",
        name: "Sign Up",
        path: "/signup",
        component: SignUp,
    },
    {
        id: "signin",
        name: "Sign In",
        path: "/signin",
        component: SignIn
    },
    {
        id: "forgotpassword",
        name: "Forgot Password",
        path: "/forgot-password",
        component: ForgotPassword
    },

    {
        id: "resetpassword",
        name: "Reset Password",
        path: "/reset-password",
        component: ResetPassword
    },
    {
        id: "verifyaccount",
        name: "Verify Account",
        path: "/verify-account",
        component: VerifyBrand
    },
    {
        id: "Product",
        name: "Signup",
        path: "/product",
        component: "Product"
    }
];