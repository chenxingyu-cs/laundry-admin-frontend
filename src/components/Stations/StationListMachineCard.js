import React from 'react';
import { List } from 'antd-mobile';
import styles from './StationListMachineCard.css';

function StationListMachineCard({ machineList }) {
  if (machineList) {
    return (
      <div className={styles.normal}>
        <List className="my-list">
          {machineList.map(machine => (
            <List.Item key={machine.id}>
              {machine.boxId}
            </List.Item>
          ))}
        </List>
      </div>
    );
  } else {
    return (
      <div className={styles.normal}>
        未设置洗衣机
      </div>
    );
  }
}

export default StationListMachineCard;
