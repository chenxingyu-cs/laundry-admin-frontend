import React from 'react';
import styles from './StationNewPanel.css';
import StationEditInfoCard from './StationEditInfoCard';
// import StationEditSelectMechineCard from './StationEditSelectMechineCard';

function StationNewPanel({ machineList, userList }) {
  return (
    <div className={styles.normal}>
      <StationEditInfoCard machineList={machineList} userList={userList} />
    </div>
  );
}

export default StationNewPanel;
