import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'react-sweet-progress/lib/style.css';
import 'mdbreact/dist/css/mdb.css'
import './css/material.css';

import App from './app';
import registerServiceWorker from './service-worker';
import { BrowserRouter } from 'react-router-dom';

const renderPage = () =>
    <BrowserRouter>
        <App/>
    </BrowserRouter>;

ReactDOM.render(renderPage(), document.getElementById('root'));
registerServiceWorker();
