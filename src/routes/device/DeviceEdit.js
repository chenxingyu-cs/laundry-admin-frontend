import React from 'react';
import { connect } from 'dva';
import styles from './DeviceEdit.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceEditPanel from '../../components/Device/DeviceEditPanel';

function DeviceEdit({ responseEntity, dispatch }) {
  const uninstallUrl = `/admin/device/uninstall/${responseEntity.boxId}`;
  return (
    <MainLayout mainTitle="设备启用" rightTitle="解绑" rightUrl={uninstallUrl}>
      <div className={styles.normal}>
        <DeviceEditPanel boxId={responseEntity.boxId} dispatch={dispatch} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.deviceDetail;
}

export default connect(mapStateToProps)(DeviceEdit);
