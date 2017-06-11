import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AdminApp from './routes/AdminApp.js';
import FranchiseeApp from './routes/franchisee/FranchiseeApp.js';
import FranchiseeList from './routes/franchisee/FranchiseeList.js';
import FranchiseeNew from './routes/franchisee/FranchiseeNew.js';
import FranchiseeEdit from './routes/franchisee/FranchiseeEdit.js';
import FranchiseeInfo from './routes/franchisee/FranchiseeInfo.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/admin/menu" />
      <Route path="/admin" component={AdminApp}>
        <Route path="menu" component={IndexPage} />

        <Route path="franchisee" component={FranchiseeApp}>
          <Route path="list" component={FranchiseeList} />
          <Route path="new" component={FranchiseeNew} />
          <Route path="edit" component={FranchiseeEdit} />
          <Route path="info" component={FranchiseeInfo} />
        </Route>
      </Route>

    </Router>
  );
}

export default RouterConfig;
