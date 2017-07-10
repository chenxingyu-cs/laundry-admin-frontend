import React from 'react';
import { browserHistory } from 'dva/router';
import { List, WhiteSpace, Button } from 'antd-mobile';
import styles from './DeviceStatusDetailPanel.css';

function DeviceStatusDetailPanel({ boxInfo }) {
  function createOperationLog() {
    browserHistory.push({
      pathname: '/admin/device/operationLog/new',
      state: { boxId: boxInfo.boxId },
    });
  }

  function listOperationLog() {
    browserHistory.push(`/admin/device/operationLog/list/${boxInfo.boxId}`);
  }

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

  const operationLogsToSee = boxInfo.operationLogs ? boxInfo.operationLogs.slice(0, 2) : [];

  return (
    <div className={styles.normal}>
      <List>
        <List.Item>设备名称 <span className={styles.id}>{ boxInfo.deviceModel }</span></List.Item>
        <List.Item>设备ID <span className={styles.id}>{ boxInfo.deviceId }</span></List.Item>
        <List.Item>工控机版本 <span className={styles.id}>{ boxInfo.boxVersion }</span></List.Item>
        <List.Item>工控机ID <span className={styles.id}>{ boxInfo.boxId }</span></List.Item>
        <List.Item>洗衣点 <span className={styles.id}>{ boxInfo.stationAddress }</span></List.Item>
        <List.Item>详细地址 <span className={styles.id}>{ boxInfo.stationName }</span></List.Item>
      </List>
      <WhiteSpace size="sm" />
      <List>
        <List.Item>实时状态 <span className={styles.id}>{ boxInfo.status }</span></List.Item>
        <List.Item>支付方式 <span className={styles.id}>{ boxInfo.paidFunction }</span></List.Item>
        <List.Item>
          本周销售额
          <span className={styles.id}>{ boxInfo.currentWeekIncome }</span>
        </List.Item>
        <List.Item>
          本周日均在线
          <span className={styles.id}>{ boxInfo.currentWeekAvgWorkTime }</span>
        </List.Item>
      </List>
      <WhiteSpace />
      <List>
        <List.Item>
          <span className={styles.operationTitle}>
            维修日志
          </span>
        </List.Item>
        {operationLogsToSee.map(operatonLog => (
          <List.Item
            key={operatonLog.id}
            extra={formatDateFromTimestamp(operatonLog.errorDate)}
            onClick={() => toOperationLogDetail(operatonLog.id)}
          >
            {operatonLog.issue}
          </List.Item>
        ))}
        <List.Item onClick={listOperationLog}>
          <span className={styles.operationTitle}>
            查看更多
          </span>
        </List.Item>
      </List>
      <WhiteSpace />
      <Button type="primary" onClick={createOperationLog}>新增维修日志</Button>
    </div>
  );
}

export default DeviceStatusDetailPanel;
