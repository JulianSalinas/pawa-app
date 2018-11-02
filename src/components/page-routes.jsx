import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MapsPage from '../singlepages/MapsPage';
import TablesPage from '../singlepages/TablesPage';
import ProfilePage from '../singlepages/ProfilePage';
import MessagePage from './single-messages';
import NotFoundPage from './single-not-found';
import DashboardPage from '../singlepages/DashboardPage';

export default () => 

<Switch>
    <Route path='/' exact component={DashboardPage} />
    <Route path='/maps' component={MapsPage} />
    <Route path='/404' component={NotFoundPage} />
    <Route path='/tables' component={TablesPage} />
    <Route path='/profile' component={ProfilePage} />
    <Route path='/messages' component={MessagePage} />
    <Route path='/dashboard' component={DashboardPage} />
</Switch>
