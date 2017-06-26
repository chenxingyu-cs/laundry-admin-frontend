import React from 'react';
import { connect } from 'dva';
import styles from './DeviceStatus.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceStatusPanel from '../../components/Device/DeviceStatusPanel';

function DeviceStatus() {
  return (
    <MainLayout mainTitle="设备状态">
      <div className={styles.normal}>
        <DeviceStatusPanel />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.devices;
}

export default connect(mapStateToProps)(DeviceStatus);
