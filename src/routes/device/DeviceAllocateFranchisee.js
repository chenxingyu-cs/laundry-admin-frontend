import React from 'react';
import { connect } from 'dva';
import { browserHistory } from 'dva/router';
import styles from './DeviceAllocateFranchisee.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceAllocateFranchiseePanel from '../../components/Device/DeviceAllocateFranchiseePanel';

function DeviceAllocateFranchisee({ location, franchiseeList, dispatch }) {
  if (location.state.selectedDevices.length === 0) {
    browserHistory.push('/admin/device/allocate/devices');
  }

  if (franchiseeList.length === 0) {
    dispatch({
      type: 'franchisees/fetch',
      payload: {
        page: 1,
      },
    });
  }

  return (
    <MainLayout mainTitle="设备启用">
      <div className={styles.normal}>
        <DeviceAllocateFranchiseePanel
          selectedDevices={location.state.selectedDevices}
          franchiseeList={franchiseeList}
          dispatch={dispatch}
        />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  const { list: franchiseeList } = state.franchisees;
  return { franchiseeList };
}

export default connect(mapStateToProps)(DeviceAllocateFranchisee);
