import React from 'react';
import ReactDOM from 'react-dom';

import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 

import App from './App';
import registerServiceWorker from './ServiceWorker';

import thunk from 'redux-thunk';
import reducers from './reducers/MainReducer';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const renderPage = () => 

    <BrowserRouter>
        <App/>
    </BrowserRouter>

ReactDOM.render(renderPage(), document.getElementById('root'));
registerServiceWorker();
