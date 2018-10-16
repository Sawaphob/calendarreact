import React from 'react';
import { Route, IndexRoute } from 'react-router';
import "./App.css";
/**
 * Import all page components here
 */
import App from './components/App';
import MainPage from './components/Calendar';
import DetailPage from './components/Detail_Teacher';
import SomeOtherPage from './components/Calendar';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/actinfo" component={DetailPage} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
  </Route>
);