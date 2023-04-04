import config from "../config";

// Layouts
import { MainLayout } from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import User from "../pages/User";
import Network from "../pages/Network";
import Account from "../pages/Account";
import Login from "../pages/Login";


const publicRoutes = [
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.user, component: User, layout: MainLayout },
    { path: config.routes.account, component: Account, layout: MainLayout },
    { path: config.routes.network, component: Network, layout: MainLayout },
    { path: config.routes.login, component: Login, layout: null },

]
  
const privateRoutes: any = [
    // { path: config.routes.admin, component: Admin, layout: AdminLayout },
]
  
export { publicRoutes, privateRoutes };