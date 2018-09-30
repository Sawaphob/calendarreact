import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory as history } from 'react-router';
import routes from './routes';
ReactDOM.render(
    <Router routes={routes} history={history} />, document.getElementById('root'));
registerServiceWorker();
