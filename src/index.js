import React from 'react';
import ReactDOM from 'react-dom';

import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 

import App from './app';
import registerServiceWorker from './service-worker';
import { BrowserRouter} from 'react-router-dom';

const renderPage = () => 

    <BrowserRouter>
        <App/>
    </BrowserRouter>

ReactDOM.render(renderPage(), document.getElementById('root'));
registerServiceWorker();
