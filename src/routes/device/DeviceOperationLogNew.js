import React from 'react';
import { connect } from 'dva';
import styles from './DeviceOperationLogNew.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceOperationLogNewPanel from '../../components/Device/DeviceOperationLogNewPanel';

function DeviceOperationLogNew({ location, dispatch }) {
  return (
    <MainLayout mainTitle="新增维修日志">
      <div className={styles.normal}>
        <DeviceOperationLogNewPanel dispatch={dispatch} boxId={location.state.boxId} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DeviceOperationLogNew);
