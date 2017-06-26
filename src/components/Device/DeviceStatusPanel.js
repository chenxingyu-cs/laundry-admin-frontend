import { connect } from 'dva';
import { List, Tabs } from 'antd-mobile';
import React from 'react';
import styles from './DeviceStatusPanel.css';

const TabPane = Tabs.TabPane;

function DeviceStatusPanel({ all, free, ongoing, offline, broken }) {
  function callback(key) {
    console.log('onChange', key);
  }

  function handleTabClick(key) {
    console.log('onTabClick', key);
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab="全部" key="1">
        <List>
          {all.map(device =>
            <div className={styles.normal} key={device.boxId}>
              <List.Item
                wrap="true"
                extra={device.status}
                align="top"
                onClick={() => console.log(device.boxId)}
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
      </TabPane>
      <TabPane tab="空闲" key="2">
        <List>
          {free.map(device =>
            <div className={styles.normal} key={device.boxId}>
              <List.Item
                wrap="true"
                extra={device.status}
                align="top"
                onClick={() => console.log(device.boxId)}
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
      </TabPane>
      <TabPane tab="运行中" key="3">
        <List>
          {ongoing.map(device =>
            <div className={styles.normal} key={device.boxId}>
              <List.Item
                wrap="true"
                extra={device.status}
                align="top"
                onClick={() => console.log(device.boxId)}
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
      </TabPane>
      <TabPane tab="掉线" key="4">
        <List>
          {offline.map(device =>
            <div className={styles.normal} key={device.boxId}>
              <List.Item
                wrap="true"
                extra={device.status}
                align="top"
                onClick={() => console.log(device.boxId)}
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
      </TabPane>
      <TabPane tab="故障" key="5">
        <List>
          {broken.map(device =>
            <div className={styles.normal} key={device.boxId}>
              <List.Item
                wrap="true"
                extra={device.status}
                align="top"
                onClick={() => console.log(device.boxId)}
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
      </TabPane>
    </Tabs>
  );
}

function mapStateToProps(state) {
  return state.devices;
}

export default connect(mapStateToProps)(DeviceStatusPanel);
