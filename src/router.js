import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/admin" />
      <Route path="/admin" component={IndexPage} />
    </Router>
  );
}

export default RouterConfig;
