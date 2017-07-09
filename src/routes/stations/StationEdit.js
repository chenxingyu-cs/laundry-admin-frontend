import React from 'react';
import { connect } from 'dva';
import styles from './StationEdit.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import StationEditPanel from '../../components/Stations/StationEditPanel';

function StationEdit({ dispatch, machineList, operators,
  administrators, observers, params, stationList }) {
  // if (userList.length === 0) {
  //   dispatch({
  //     type: 'adminUsers/fetch',
  //     payload: {
  //       page: 1,
  //     },
  //   });
  // }

  // if (machineList.length === 0) {
  //   dispatch({
  //     type: 'machines/fetch',
  //     payload: {
  //       page: 1,
  //     },
  //   });
  // }

  // let stationInfo = {};
  // if (stationList.length === 0) {
  //   dispatch({
  //     type: 'stations/fetch',
  //     payload: {
  //       page: 1,
  //     },
  //   });
  // } else {
  //   stationInfo = stationList.find(station => station.id === parseInt(params.stationId, 10));
  // }
  if (operators.length === 0 || administrators.length === 0 || observers.length === 0) {
    dispatch({
      type: 'franchiseeUsers/fetch',
      payload: {
        page: 1,
      },
    });

    dispatch({
      type: 'machines/fetch',
      payload: {
        page: 1,
      },
    });
  }

  const stationInfo = stationList.find(station => station.id === parseInt(params.stationId, 10));

  const totalMachineList = [...machineList, ...stationInfo.machines];

  return (
    <MainLayout mainTitle="编辑洗衣点">
      <div className={styles.normal}>
        <StationEditPanel
          dispatch={dispatch}
          machineList={totalMachineList}
          operators={operators}
          administrators={administrators}
          observers={observers}
          stationInfo={stationInfo}
        />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  // const { list: userList } = state.adminUsers;
  // const { list: machineList } = state.machines;
  const { list: stationList } = state.stations;
  // return { userList, machineList, stationList };
  const { list: machineList } = state.machines;
  const { operators, administrators, observers } = state.franchiseeUsers;
  return { machineList, operators, administrators, observers, stationList };
}

export default connect(mapStateToProps)(StationEdit);
