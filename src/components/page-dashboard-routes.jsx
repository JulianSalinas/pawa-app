import Info from "@material-ui/icons/Info";
import Person from "@material-ui/icons/Person";
import Gamepad from "@material-ui/icons/Gamepad";
import Settings from "@material-ui/icons/Settings";
import Dashboard from "@material-ui/icons/PieChart";
import Accessibility from "@material-ui/icons/Accessibility";
import OnDemandVideo from "@material-ui/icons/OndemandVideo";

import DemoPage from "./view-demo.jsx";
import TipsPage from "./view-tips.jsx";
import StatsPage from "./view-stats.jsx";
import ProfilePAge from "./view-profile.jsx";
import SettingsPage from "./view-settings.jsx";
import ExercisesPage from "./view-exercises.jsx";
import AchievementsPage from "./view-achievements.jsx";

const routes = [
    {
        path: "/stats",
        sidebarName: "Estadísticas",
        navbarName: "Estadísticas",
        icon: Dashboard,
        component: StatsPage
    },
    {
        path: "/achievements",
        sidebarName: "Logros",
        navbarName: "Logros",
        icon: Gamepad,
        component: AchievementsPage
    },
    {
        path: "/exercises",
        sidebarName: "Ejercicios",
        navbarName: "Ejercicios",
        icon: Accessibility,
        component: ExercisesPage
    },
    {
        path: "/tips",
        sidebarName: "Tips",
        navbarName: "Tips",
        icon: Info,
        component: TipsPage
    },
    {
        path: "/profile",
        sidebarName: "Perfil",
        navbarName: "Perfil",
        icon: Person,
        component: ProfilePAge
    },
    {
        path: "/settings",
        sidebarName: "Configuración",
        navbarName: "Configuración",
        icon: Settings,
        component: SettingsPage
    },
    {
        path: "/demo",
        sidebarName: "Demo",
        navbarName: "Demo",
        icon: OnDemandVideo,
        component: DemoPage
    },
    {
        redirect: true,
        path: "/",
        to: "/dashboard",
        navbarName: "Redirect"
    }
];

export default routes;