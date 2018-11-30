import React from "react";

import DemoPage from "../views/view-demo-layout.jsx";
import TipsPage from "../views/view-tips-layout.jsx";
import MetricsPage from "../views/view-metrics-layout.jsx";
import ProfilePAge from "../views/view-profile-layout.jsx";
import SettingsPage from "../views/view-settings-layout.jsx";
import ExercisesPage from "../views/view-exercises-layout.jsx";
import AchievementsPage from "../views/view-achievements-layout.jsx";

import SettingsIcon from "@material-ui/icons/Settings"
import DemoIcon from "@material-ui/icons/OndemandVideo"

export default [
    {
        path: "/metrics",
        name: "Estadísticas",
        component: MetricsPage,
        icon: require('../../assets/icon-metrics.png')
    },
    {
        path: "/achievements",
        name: "Logros",
        component: AchievementsPage,
        icon: require('../../assets/icon-achivement.png')
    },
    {
        path: "/exercises",
        name: "Ejercicios",
        component: ExercisesPage,
        icon: require('../../assets/icon-exercises.png')
    },
    {
        path: "/tips",
        name: "Tips",
        component: TipsPage,
        icon: require('../../assets/icon-tips.png')
    },
    {
        path: "/profile",
        name: "Perfil",
        component: ProfilePAge,
        icon: require('../../assets/icon-profile.png')
    },
    {
        path: "/settings",
        name: "Configuración",
        component: SettingsPage,
        icon: SettingsIcon
    },
    {
        path: "/demo",
        name: "Demo",
        component: DemoPage,
        icon: DemoIcon
    },
    {
        redirect: true,
        path: "/",
        to: "/metrics",
    }
];