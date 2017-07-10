import React from 'react';
import { browserHistory } from 'dva/router';
import { List, WhiteSpace } from 'antd-mobile';
import styles from './DeviceOperationLogListPanel.css';

const Item = List.Item;

function DeviceOperationLogListPanel({ operationLogs }) {
  function formatDateFromTimestamp(timestamp) {
    const timeDate = new Date(timestamp);
    const yearStr = timeDate.getFullYear();
    const monthValue = timeDate.getMonth() + 1;
    const dayValue = timeDate.getDate() + 1;
    const monthStr = dayValue < 10 ? `0${monthValue}` : monthValue;
    const dayStr = dayValue < 10 ? `0${dayValue}` : dayValue;
    return `${yearStr}-${monthStr}-${dayStr}`;
  }

  function toOperationLogDetail(logId) {
    browserHistory.push(`admin/device/operationLog/info/${logId}`);
  }

  return (
    <div className={styles.normal}>
      <WhiteSpace />
      <List>
        {operationLogs && operationLogs.map(operatonLog => (
          <Item
            key={operatonLog.id}
            extra={formatDateFromTimestamp(operatonLog.errorDate)}
            onClick={() => toOperationLogDetail(operatonLog.id)}
          >
            {operatonLog.issue}
          </Item>
        ))}
      </List>
    </div>
  );
}

export default DeviceOperationLogListPanel;
