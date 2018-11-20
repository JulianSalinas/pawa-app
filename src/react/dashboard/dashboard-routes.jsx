import Info from "@material-ui/icons/Info";
import Person from "@material-ui/icons/Person";
import Gamepad from "@material-ui/icons/Gamepad";
import Settings from "@material-ui/icons/Settings";
import Dashboard from "@material-ui/icons/PieChart";
import Accessibility from "@material-ui/icons/Accessibility";
import OnDemandVideo from "@material-ui/icons/OndemandVideo";

import DemoPage from "../views/view-demo.jsx";
import TipsPage from "../views/view-tips.jsx";
import StatsPage from "../views/view-metrics.jsx";
import ProfilePAge from "../views/view-profile.jsx";
import SettingsPage from "../views/view-settings.jsx";
import ExercisesPage from "../views/view-exercises.jsx";
import AchievementsPage from "../views/view-achievements.jsx";

const routes = [
    {
        path: "/stats",
        name: "Estadísticas",
        icon: Dashboard,
        component: StatsPage
    },
    {
        path: "/achievements",
        name: "Logros",
        icon: Gamepad,
        component: AchievementsPage
    },
    {
        path: "/exercises",
        name: "Ejercicios",
        icon: Accessibility,
        component: ExercisesPage
    },
    {
        path: "/tips",
        name: "Tips",
        icon: Info,
        component: TipsPage
    },
    {
        path: "/profile",
        name: "Perfil",
        icon: Person,
        component: ProfilePAge
    },
    {
        path: "/settings",
        name: "Configuración",
        icon: Settings,
        component: SettingsPage
    },
    {
        path: "/demo",
        name: "Demo",
        icon: OnDemandVideo,
        component: DemoPage
    },
    {
        redirect: true,
        path: "/",
        to: "/stats",
    }
];

export default routes;