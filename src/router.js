import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AdminApp from './routes/AdminApp.js';
import FranchiseeApp from './routes/franchisee/FranchiseeApp.js';
import FranchiseeList from './routes/franchisee/FranchiseeList.js';
import FranchiseeNew from './routes/franchisee/FranchiseeNew.js';
import FranchiseeEdit from './routes/franchisee/FranchiseeEdit.js';
import FranchiseeInfo from './routes/franchisee/FranchiseeInfo.js';

import UserNew from './routes/users/UserNew.js';
import UserApp from './routes/users/UserApp.js';
import UserList from './routes/users/UserList.js';

import OrderQuery from './routes/order/OrderQuery.js';
import OrderApp from './routes/order/OrderApp.js';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/admin/menu" />
      <Route path="/admin" component={AdminApp}>
        <Route path="menu" component={IndexPage} />

        <Route path="franchisee" component={FranchiseeApp}>
          <Route path="list" component={FranchiseeList} />
          <Route path="new" component={FranchiseeNew} />
          <Route path="edit/:franchiseeId" component={FranchiseeEdit} />
          <Route path="info/:franchiseeId" component={FranchiseeInfo} />
        </Route>

        <Route path="users" component={UserApp}>
          <Route path="list" component={UserList} />
          <Route path="new" component={UserNew} />
        </Route>

        <Route path="order" component={OrderApp}>
          <Route path="query" component={OrderQuery} />
        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
