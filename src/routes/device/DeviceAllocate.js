import React from 'react';
import { connect } from 'dva';
import styles from './DeviceAllocate.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import DeviceAllocateDevicesPanel from '../../components/Device/DeviceAllocateDevicesPanel';


class DeviceAllocate extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'unallocatedDevices/fetch',
      payload: {
        page: 1,
      },
    });
  }

  render() {
    return (
      <MainLayout mainTitle="设备分配">
        <div className={styles.normal}>
          <DeviceAllocateDevicesPanel devices={this.props.deviceList} />
        </div>
      </MainLayout>
    );
  }
}

function mapStateToProps(state) {
  const { list: deviceList } = state.unallocatedDevices;
  return { deviceList };
}

export default connect(mapStateToProps)(DeviceAllocate);
