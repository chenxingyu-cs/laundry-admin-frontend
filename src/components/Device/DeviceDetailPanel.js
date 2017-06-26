import React from 'react';
import { Grid, List } from 'antd-mobile';
import styles from './DeviceDetailPanel.css';

function DeviceDetailPanel({ boxInfo }) {
  return (
    <div className={styles.normal}>
      <List>
        <List.Item>工控机编号 <p className={styles.id}>{ boxInfo.boxId }</p></List.Item>
        <List.Item>洗衣机编号 <p className={styles.id}>{ boxInfo.deviceId }</p></List.Item>
        <List.Item>简易识别码 <p className={styles.id}>{ boxInfo.qrcode }</p></List.Item>
        <List.Item>洗衣机类型 <p className={styles.id}>{ boxInfo.deviceName }</p></List.Item>
        <List.Item>洗衣机型号 <p className={styles.id}>{ boxInfo.deviceModel }</p></List.Item>
      </List>
      <Grid
        data={boxInfo.functions}
        className={styles.price}
        columnNum={2}
        renderItem={dataItem => (
          <div className={styles.single}>
            <img src="https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png" role="presentation" style={{ width: '40%' }} />
            <div>
              <p>{dataItem.name}</p>
              <p>价格{dataItem.price}元</p>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default DeviceDetailPanel;
