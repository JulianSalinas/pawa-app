import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Unarchive from "@material-ui/icons/Unarchive";

import DashboardPage from "./view-dashboard.jsx";
import UserProfile from "./view-scratchpad.jsx";
import UpgradeToPro from "./view-not-found.jsx";

const routes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Material Dashboard",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/user",
        sidebarName: "User Profile",
        navbarName: "Profile",
        icon: Person,
        component: UserProfile
    },
    {
        path: "/upgrade-to-pro",
        sidebarName: "Upgrade To PRO",
        navbarName: "Upgrade To PRO",
        icon: Unarchive,
        component: UpgradeToPro
    },
    { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default routes;