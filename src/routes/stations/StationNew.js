import React from 'react';
import { connect } from 'dva';
import styles from './StationNew.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import StationNewPanel from '../../components/Stations/StationNewPanel';

// const machineList = [
//   {
//     value: 1,
//     label: '洗衣机1号',
//   },
//   {
//     value: 2,
//     label: '洗衣机2号',
//   },
//   {
//     value: 3,
//     label: '洗衣机3号',
//   },
//   {
//     value: 4,
//     label: '洗衣机4号',
//   },
//   {
//     value: 5,
//     label: '洗衣机5号',
//   },
// ];

function StationNew({ dispatch, userList, machineList }) {
  if (userList.length === 0) {
    dispatch({
      type: 'adminUsers/fetch',
      payload: {
        page: 1,
      },
    });
  }

  if (machineList.length === 0) {
    dispatch({
      type: 'machines/fetch',
      payload: {
        page: 1,
      },
    });
  }

  return (
    <MainLayout mainTitle="新建洗衣点">
      <div className={styles.normal}>
        <StationNewPanel dispatch={dispatch} machineList={machineList} userList={userList} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  const { list: userList } = state.adminUsers;
  const { list: machineList } = state.machines;
  return { userList, machineList };
}

export default connect(mapStateToProps)(StationNew);
