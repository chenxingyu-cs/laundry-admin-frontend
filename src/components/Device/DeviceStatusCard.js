import { browserHistory } from 'dva/router';
import { List } from 'antd-mobile';
import React from 'react';
import styles from './DeviceStatusCard.css';

function DeviceStatusCard({ list }) {
  function jumpToDeviceStatusDetail(boxId) {
    browserHistory.push(`/admin/device/statusDetail/${boxId}`);
  }

  return (
    <List>
      {list.map(device =>
        <div className={styles.normal} key={device.boxId}>
          <List.Item
            className={styles.list}
            wrap="true"
            extra={device.status}
            align="top"
            onClick={() => jumpToDeviceStatusDetail(device.boxId)}
            multipleLine
          >
            {device.stationName}
            <List.Item.Brief wrap="true">
              <span> {device.currentWeekIncome}元 </span>
              <span className={styles.center}> {device.deviceModel} </span>
            </List.Item.Brief>
            <List.Item.Brief wrap="true">
              <span> 当周营业额 </span>
              <span className={styles.center}> 洗衣机型号 </span>
            </List.Item.Brief>
          </List.Item>
        </div>,
      )}
    </List>
  );
}
export default DeviceStatusCard;
