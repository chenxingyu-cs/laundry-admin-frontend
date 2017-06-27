import React from 'react';
import { connect } from 'dva';
import styles from './StationEdit.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import StationEditPanel from '../../components/Stations/StationEditPanel';

function StationEdit({ dispatch, userList, machineList, stationList, params }) {
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

  let stationInfo = {};
  if (stationList.length === 0) {
    dispatch({
      type: 'stations/fetch',
      payload: {
        page: 1,
      },
    });
  } else {
    stationInfo = stationList.find(station => station.id === parseInt(params.stationId, 10));
    console.log('station', stationInfo);
  }

  return (
    <MainLayout mainTitle="编辑洗衣点">
      <div className={styles.normal}>
        <StationEditPanel
          dispatch={dispatch}
          machineList={machineList}
          userList={userList}
          stationInfo={stationInfo}
        />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  const { list: userList } = state.adminUsers;
  const { list: machineList } = state.machines;
  const { list: stationList } = state.stations;
  return { userList, machineList, stationList };
}

export default connect(mapStateToProps)(StationEdit);
