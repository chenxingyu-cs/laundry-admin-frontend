import React from 'react';
import { List, WhiteSpace } from 'antd-mobile';
import styles from './DeviceOperationLogInfoPanel.css';

function DeviceOperationLogInfoPanel({ operationLogInfo }) {
  function formatDateFromTimestamp(timestamp) {
    const timeDate = new Date(timestamp);
    const yearStr = timeDate.getFullYear();
    const monthValue = timeDate.getMonth() + 1;
    const dayValue = timeDate.getDate() + 1;
    const monthStr = dayValue < 10 ? `0${monthValue}` : monthValue;
    const dayStr = dayValue < 10 ? `0${dayValue}` : dayValue;
    return `${yearStr}-${monthStr}-${dayStr}`;
  }

  return (
    <div className={styles.normal}>
      <WhiteSpace />
      <List>
        <List.Item>故障日期
          <span className={styles.listContent}>
            { formatDateFromTimestamp(operationLogInfo.errorDate) }
          </span>
        </List.Item>
        <List.Item>修理日期
          <span className={styles.listContent}>
            { formatDateFromTimestamp(operationLogInfo.repairDate) }
          </span>
        </List.Item>
      </List>
      <WhiteSpace />
      <List>
        <List.Item>故障原因</List.Item>
        <List.Item wrap>{ operationLogInfo.issue }</List.Item>
      </List>
      <WhiteSpace />
      <List>
        <List.Item>维修方法</List.Item>
        <List.Item wrap>{ operationLogInfo.repairMethod }</List.Item>
      </List>

    </div>
  );
}

export default DeviceOperationLogInfoPanel;
