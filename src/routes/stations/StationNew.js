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

function StationNew({ dispatch, machineList, operators, administrators, observers }) {
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

  // dispatch({
  //   type: 'machines/fetch',
  //   payload: {
  //     page: 1,
  //   },
  // });


  return (
    <MainLayout mainTitle="新建洗衣点">
      <div className={styles.normal}>
        <StationNewPanel
          dispatch={dispatch}
          machineList={machineList}
          operators={operators}
          administrators={administrators}
          observers={observers}
        />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  const { list: machineList } = state.machines;
  const { operators, administrators, observers } = state.franchiseeUsers;
  return { machineList, operators, administrators, observers };
}

export default connect(mapStateToProps)(StationNew);
