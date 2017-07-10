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

import OperationStat from './routes/statistics/OperationStat.js';
import OperationApp from './routes/statistics/OperationApp.js';

import DeviceList from './routes/device/DeviceList.js';
import DeviceEdit from './routes/device/DeviceEdit.js';
import DeviceStatus from './routes/device/DeviceStatus.js';
import DeviceDetail from './routes/device/DeviceStatusDetail.js';
import DeviceAllocate from './routes/device/DeviceAllocate.js';
import DeviceApp from './routes/device/DeviceApp.js';
import DeviceAllocateFranchisee from './routes/device/DeviceAllocateFranchisee.js';
import DeviceOperationLogList from './routes/device/DeviceOperationLogList.js';
import DeviceOperationLogNew from './routes/device/DeviceOperationLogNew.js';
import DeviceOperationLogInfo from './routes/device/DeviceOperationLogInfo.js';

import StationApp from './routes/stations/StationApp.js';
import StationList from './routes/stations/StationList.js';
import StationNew from './routes/stations/StationNew.js';
import StationEdit from './routes/stations/StationEdit.js';


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
          <Route path="new" component={StationNew} />
          <Route path="edit/:stationId" component={StationEdit} />
        </Route>

        <Route path="order" component={OrderApp}>
          <Route path="query" component={OrderQuery} />
        </Route>

        <Route path="operation" component={OperationApp}>
          <Route path="statistics" component={OperationStat} />
        </Route>

        <Route path="device" component={DeviceApp}>
          <Route path="list" component={DeviceList} />
          <Route path="status" component={DeviceStatus} />
          <Route path="allocate/devices" component={DeviceAllocate} />
          <Route path="allocate/franchisee" component={DeviceAllocateFranchisee} />
          <Route path="detail/:deviceId" component={DeviceEdit} />
          <Route path="unbind/:deviceId" component={DeviceEdit} />
          <Route path="statusDetail/:deviceId" component={DeviceDetail} />
          <Route path="operationLog/new" component={DeviceOperationLogNew} />
          <Route path="operationLog/list/:deviceId" component={DeviceOperationLogList} />
          <Route path="operationLog/info/:logId" component={DeviceOperationLogInfo} />
        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
