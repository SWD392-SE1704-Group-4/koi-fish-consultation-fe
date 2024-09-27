import Home from "../containers/Home";
import Dashboard from "../containers/Dashboard";
import Login from "../containers/LoginPage";
import SignUp from "../containers/SignUpPage";

export const privateRoutes = [
    { path: "/", container: Home },
    { path: "/home", container: Home },
    { path: "/me", container: Dashboard },
]

export const publicRoutes = [
    { path: "/login", container: Login },
    { path: "/register", container: SignUp },
]