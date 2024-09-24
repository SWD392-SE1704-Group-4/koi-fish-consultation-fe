import Home from "../containers/Home";
import Dashboard from "../containers/Dashboard";

export const privateRoutes = [
    {path: "/home", container: Home},
    {path: "/admin/dashboard", container: Dashboard},
]

export const publicRoutes = [
    "/login",
    "/register",
]