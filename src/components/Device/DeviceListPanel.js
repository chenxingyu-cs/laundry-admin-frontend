import { connect } from 'dva';
import { List, Tabs } from 'antd-mobile';
import React from 'react';
import styles from './DeviceListPanel.css';

const TabPane = Tabs.TabPane;

function DeviceListPanel({ free, ongoing }) {
  function callback(key) {
    console.log('onChange', key);
    console.log(free);
  }

  function handleTabClick(key) {
    console.log('onTabClick', key);
    console.log(ongoing);
  }

  function jumpToOrderDetail(boxId, status) {
    if (status === '空闲') {
      alert('跳转启用'); // eslint-disable-line
    } else if (status === '使用中') {
      alert('跳转编辑'); // eslint-disable-line
    }
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab="未启用设备" key="1">
        <List>
          {free.map(device =>
            <div
              key={device.boxId}
              className={styles.card}
              onClick={() => jumpToOrderDetail(device.boxId, device.status)}
            >
              工控机ID {device.boxId}
            </div>,
          )}
        </List>
      </TabPane>
      <TabPane tab="已启用设备" key="2">
        <List>
          {ongoing.map(device =>
            <div
              key={device.boxId}
              className={styles.card}
              onClick={() => jumpToOrderDetail(device.boxId, device.status)}
            >
              工控机ID {device.boxId}
            </div>,
          )}
        </List>
      </TabPane>
    </Tabs>
  );
}

function mapStateToProps(state) {
  const { free, ongoing } = state.devices;
  return { free, ongoing };
}

export default connect(mapStateToProps)(DeviceListPanel);
