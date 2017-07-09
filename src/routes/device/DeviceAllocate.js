import React from 'react';
import { connect } from 'dva';
import styles from './DeviceAllocate.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceAllocateDevicesPanel from '../../components/Device/DeviceAllocateDevicesPanel';

function DeviceAllocate({ deviceList, dispatch }) {
  if (deviceList.length === 0) {
    dispatch({
      type: 'unallocatedDevices/fetch',
      payload: {
        page: 1,
      },
    });
  }

  return (
    <MainLayout mainTitle="设备启用">
      <div className={styles.normal}>
        <DeviceAllocateDevicesPanel devices={deviceList} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  const { list: deviceList } = state.unallocatedDevices;
  return { deviceList };
}

export default connect(mapStateToProps)(DeviceAllocate);
