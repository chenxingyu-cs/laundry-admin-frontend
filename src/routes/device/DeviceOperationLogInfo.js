import React from 'react';
import { connect } from 'dva';
import styles from './DeviceOperationLogInfo.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceOperationLogInfoPanel from '../../components/Device/DeviceOperationLogInfoPanel';

function DeviceOperationLogInfo({ params, boxInfo }) {
  const operationLogInfo = boxInfo.operationLogs
    && boxInfo.operationLogs.find(item => item.id === parseInt(params.logId, 10));

  return (
    <MainLayout mainTitle="维修日志">
      <div className={styles.normal}>
        <DeviceOperationLogInfoPanel operationLogInfo={operationLogInfo} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.deviceDetail;
}

export default connect(mapStateToProps)(DeviceOperationLogInfo);
