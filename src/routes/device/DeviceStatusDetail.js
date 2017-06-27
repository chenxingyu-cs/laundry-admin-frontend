import React from 'react';
import { connect } from 'dva';
import styles from './DeviceStatusDetail.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceStatusDetailPanel from '../../components/Device/DeviceStatusDetailPanel';

function DeviceStatusDetail({ boxInfo }) {
  return (
    <MainLayout mainTitle="设备详情">
      <div className={styles.normal}>
        <DeviceStatusDetailPanel boxInfo={boxInfo} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.deviceDetail;
}

export default connect(mapStateToProps)(DeviceStatusDetail);
