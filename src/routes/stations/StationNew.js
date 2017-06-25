import React from 'react';
import { connect } from 'dva';
import styles from './StationNew.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import StationNewPanel from '../../components/Stations/StationNewPanel';

const machineList = [
  {
    value: 1,
    label: '洗衣机1号',
  },
  {
    value: 2,
    label: '洗衣机2号',
  },
  {
    value: 3,
    label: '洗衣机3号',
  },
  {
    value: 4,
    label: '洗衣机4号',
  },
  {
    value: 5,
    label: '洗衣机5号',
  },
];

function StationNew({ dispatch }) {
  return (
    <MainLayout mainTitle="新建洗衣点">
      <div className={styles.normal}>
        <StationNewPanel dispatch={dispatch} machineList={machineList} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StationNew);
