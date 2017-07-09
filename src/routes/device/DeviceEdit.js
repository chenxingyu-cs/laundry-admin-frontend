import React from 'react';
import { connect } from 'dva';
import styles from './DeviceEdit.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceEditPanel from '../../components/Device/DeviceEditPanel';
import DeviceDetailPanel from '../../components/Device/DeviceDetailPanel';

function DeviceEdit({ boxInfo, test, dispatch }) {
  const uninstallUrl = `/admin/device/unbind/${boxInfo.boxId}`;
  if (!boxInfo.deviceId) {
    return (
      <MainLayout mainTitle="设备启用">
        <div className={styles.normal}>
          <DeviceEditPanel boxId={boxInfo.boxId} test={test} dispatch={dispatch} />
        </div>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout mainTitle="设备启用" rightTitle="解绑" rightUrl={uninstallUrl}>
        <div className={styles.normal}>
          <DeviceDetailPanel boxInfo={boxInfo} test={test} dispatch={dispatch} />
        </div>
      </MainLayout>
    );
  }
}

function mapStateToProps(state) {
  return state.deviceDetail;
}

export default connect(mapStateToProps)(DeviceEdit);
