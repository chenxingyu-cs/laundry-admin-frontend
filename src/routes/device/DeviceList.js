import React from 'react';
import { connect } from 'dva';
import styles from './DeviceList.css';
import MainLayout from '../../components/MainLayout/MainLayout';
// import DeviceListPanel from '../../components/Device/DeviceListPanel';
// import DeviceSearchPanel from '../../components/Device/DeviceSearchPanel';

function DeviceList({ available, using, dispatch }) {
  return (
    <MainLayout mainTitle="设备启用">
      // <div className={styles.normal}>
      // 	<DeviceSearchPanel />
      //   <DeviceListPanel deviceListInfo={available, using} dispatch={dispatch} />
      // </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.devices;
}

export default connect(mapStateToProps)(DeviceList);
