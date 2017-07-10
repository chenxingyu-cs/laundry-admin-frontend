import React from 'react';
import { List, WhiteSpace } from 'antd-mobile';
import styles from './DeviceOperationLogListPanel.css';

const Item = List.Item;

function DeviceOperationLogListPanel({ operationLogs }) {
  function formatDateFromTimestamp(timestamp) {
    const timeDate = new Date(timestamp);
    const yearStr = timeDate.getFullYear();
    const monthValue = timeDate.getMonth();
    const dayValue = timeDate.getDate();
    const monthStr = dayValue < 10 ? `0${monthValue}` : monthValue;
    const dayStr = dayValue < 10 ? `0${dayValue}` : dayValue;
    return `${yearStr}-${monthStr}-${dayStr}`;
  }

  return (
    <div className={styles.normal}>
      <WhiteSpace />
      <List>
        {operationLogs && operationLogs.map(operatonLog => (
          <Item
            key={operatonLog.id}
            extra={formatDateFromTimestamp(operatonLog.errorDate)}
          >
            {operatonLog.issue}
          </Item>
        ))}
      </List>
    </div>
  );
}

export default DeviceOperationLogListPanel;
