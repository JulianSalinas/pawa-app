import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Calibrate from "@material-ui/icons/Unarchive";

import SetupDevice from "./view-not-found.jsx";
import UserProfile from "./view-scratchpad.jsx";
import DashboardPage from "./view-stadistics.jsx";

const routes = [
    {
        path: "/dashboard",
        sidebarName: "Estadísticas",
        navbarName: "Estadísticas",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/profile",
        sidebarName: "Perfil",
        navbarName: "Perfil",
        icon: Person,
        component: UserProfile
    },
    {
        path: "/calibrate",
        sidebarName: "Calibrar",
        navbarName: "Calibrar",
        icon: Calibrate,
        component: SetupDevice
    },
    {
        redirect: true,
        path: "/",
        to: "/dashboard",
        navbarName: "Redirect"
    }
];

export default routes;