import React from "react";

import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Unarchive from "@material-ui/icons/Unarchive";

import { Redirect } from "react-router-dom";
import SetupDevice from "./view-not-found.jsx";
import UserProfile from "./view-scratchpad.jsx";
import DashboardPage from "./view-stadistics.jsx";

const routes = [
    {
        path: "/dashboard",
        sidebarName: "Mis estadísticas",
        navbarName: "Mis estadísticas",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/user",
        sidebarName: "Mi perfil",
        navbarName: "Mi perfil",
        icon: Person,
        component: UserProfile
    },
    {
        path: "/calibrate",
        sidebarName: "Calibrar",
        navbarName: "Calibrar",
        icon: Unarchive,
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