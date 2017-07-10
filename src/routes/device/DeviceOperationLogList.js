import React from 'react';
import { connect } from 'dva';
import styles from './DeviceOperationLogList.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceOperationLogListPanel from '../../components/Device/DeviceOperationLogListPanel';

class DeviceOperationLogList extends React.Component {
  componentWillMount() {
    const deviceId = this.props.params.deviceId;
    this.props.dispatch({
      type: 'deviceDetail/fetchStatus',
      payload: {
        boxId: deviceId,
      },
    });
  }

  render() {
    const { operationLogs } = this.props.boxInfo;
    return (
      <MainLayout mainTitle="维修日志">
        <div className={styles.normal}>
          <DeviceOperationLogListPanel operationLogs={operationLogs} />
        </div>
      </MainLayout>
    );
  }
}

function mapStateToProps(state) {
  const { boxInfo } = state.deviceDetail;
  return { boxInfo };
}

export default connect(mapStateToProps)(DeviceOperationLogList);
