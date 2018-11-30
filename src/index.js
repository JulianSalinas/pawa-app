import React from 'react';
import ReactDOM from 'react-dom';

import "perfect-scrollbar/css/perfect-scrollbar.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'react-sweet-progress/lib/style.css';
import 'mdbreact/dist/css/mdb.css'
import './css/material.css';

import App from './app';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './service-worker';

const renderPage = () =>
    <BrowserRouter>
        <App/>
    </BrowserRouter>;

ReactDOM.render(renderPage(), document.getElementById('root'));
registerServiceWorker();
