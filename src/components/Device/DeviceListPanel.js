import { connect } from 'dva';
import { List, Tabs } from 'antd-mobile';
import React from 'react';
import styles from './DeviceListPanel.css';

const TabPane = Tabs.TabPane;

function DeviceListPanel({ bind, unbind, dispatch }) {
  function callback(key) {
    console.log('onChange', key);
    console.log(unbind);
  }

  function handleTabClick(key) {
    console.log('onTabClick', key);
    console.log(bind);
  }

  function jumpToOrderDetail(boxId) {
    dispatch({
      type: 'devices/fetch',
      payload: {
        boxId,
      },
    });
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab="未启用设备" key="1">
        <List>
          {unbind.map(device =>
            <div
              key={device.boxId}
              className={styles.card}
              onClick={() => jumpToOrderDetail(device.boxId)}
            >
              工控机ID {device.boxId}
            </div>,
          )}
        </List>
      </TabPane>
      <TabPane tab="已启用设备" key="2">
        <List>
          {bind.map(device =>
            <div
              key={device.boxId}
              className={styles.card}
              onClick={() => jumpToOrderDetail(device.boxId)}
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
  return state.devices;
}

export default connect(mapStateToProps)(DeviceListPanel);
