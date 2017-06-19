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
import UserInfo from './routes/users/UserInfo.js';
import UserEdit from './routes/users/UserEdit.js';

import OrderQuery from './routes/order/OrderQuery.js';
import OrderApp from './routes/order/OrderApp.js';

import DeviceList from './routes/device/DeviceList.js';
import DeviceApp from './routes/device/DeviceApp.js';


import StationApp from './routes/stations/StationApp.js';
import StationList from './routes/stations/StationList.js';


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
          <Route path="info/:userId" component={UserInfo} />
          <Route path="edit/:userId" component={UserEdit} />
        </Route>

        <Route path="stations" component={StationApp}>
          <Route path="list" component={StationList} />
        </Route>

        <Route path="order" component={OrderApp}>
          <Route path="query" component={OrderQuery} />
        </Route>

        <Route path="device" component={DeviceApp}>
          <Route path="list" component={DeviceList} />
        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
