import './App.css';
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import MasterPage from "./masterpage/MasterPage"
import PresentationPage from "./singlepages/PresentationPage"

export default () => 

    <div className="flexible-content"> 
        <PresentationPage/>
    </div>
