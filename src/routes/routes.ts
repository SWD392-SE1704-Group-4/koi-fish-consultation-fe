import Home from "../containers/Home";
import Dashboard from "../containers/Dashboard";

const appRoutes = [
    {path: '/home', container: Home},
    {path: '/admin/dashboard', container: Dashboard}
]

export default appRoutes;