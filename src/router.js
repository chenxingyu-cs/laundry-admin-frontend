import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AdminApp from './routes/AdminApp.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/admin/menu" />
      <Route path="/admin" component={AdminApp}>
        <Route path="menu" component={IndexPage} />
      </Route>

    </Router>
  );
}

export default RouterConfig;
