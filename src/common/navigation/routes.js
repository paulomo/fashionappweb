import SignUp from '../../pages/auth/signup/SignUp';
import SignIn from '../../pages/auth/signin/SignIn';
import ForgotPassword from '../../pages/auth/forgotpassword/ForgotPassword';

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
        id: "Verify Account",
        name: "Signup",
        path: "/verify-account",
        component: "VerifyBrand"
    },
    {
        id: "Product",
        name: "Signup",
        path: "/product",
        component: "Product"
    }
];