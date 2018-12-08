import React from "react";

import DemoView from "../views/view-demo-layout.jsx";
import TipsView from "../views/view-tips-layout.jsx";
import MetricsView from "../views/view-metrics-layout.jsx";
import ProfileView from "../views/view-profile-layout.jsx";
import SettingsView from "../views/view-settings-layout.jsx";
import ExercisesView from "../views/view-exercises-layout.jsx";
import AchievementsView from "../views/view-achievements-layout.jsx";

import SettingsIcon from "@material-ui/icons/Settings"
import DemoIcon from "@material-ui/icons/OndemandVideo"

export default [
    {
        path: "/metrics",
        name: "Estadísticas",
        component: MetricsView,
        icon: require('../../assets/app-icons/icon-metrics.png')
    },
    {
        path: "/achievements",
        name: "Logros",
        component: AchievementsView,
        icon: require('../../assets/app-icons/icon-achivement.png')
    },
    {
        path: "/exercises",
        name: "Ejercicios",
        component: ExercisesView,
        icon: require('../../assets/app-icons/icon-exercises.png')
    },
    {
        path: "/tips",
        name: "Tips",
        component: TipsView,
        icon: require('../../assets/app-icons/icon-tips.png')
    },
    {
        path: "/profile",
        name: "Perfil",
        component: ProfileView,
        icon: require('../../assets/app-icons/icon-profile.png')
    },
    {
        path: "/settings",
        name: "Configuración",
        component: SettingsView,
        icon: SettingsIcon
    },
    // {
    //     path: "/demo",
    //     name: "Demo",
    //     component: DemoView,
    //     icon: DemoIcon
    // },
    {
        redirect: true,
        path: "/",
        to: "/tips"
    }
];