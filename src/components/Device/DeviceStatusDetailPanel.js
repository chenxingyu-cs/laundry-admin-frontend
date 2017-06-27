import React from 'react';
import { List, WhiteSpace } from 'antd-mobile';
import styles from './DeviceStatusDetailPanel.css';

function DeviceStatusDetailPanel({ boxInfo }) {
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
    </div>
  );
}

export default DeviceStatusDetailPanel;
