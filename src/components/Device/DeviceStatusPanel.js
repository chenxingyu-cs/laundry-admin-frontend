import { connect } from 'dva';
import { Tabs } from 'antd-mobile';
import React from 'react';
import styles from './DeviceStatusPanel.css';
import DeviceStatusCard from './DeviceStatusCard';

const TabPane = Tabs.TabPane;

function DeviceStatusPanel({ all, free, ongoing, offline, broken }) {
  function callback(key) {
    console.log('onChange', key);
  }

  function handleTabClick(key) {
    console.log('onTabClick', key);
  }

  return (
    <Tabs defaultActiveKey="1" className={styles.tab} onChange={callback} onTabClick={handleTabClick} swipeable={false}>
      <TabPane tab="全部" key="1">
        <div>
          <DeviceStatusCard list={all} />
        </div>
      </TabPane>
      <TabPane tab="空闲" key="2">
        <div>
          <DeviceStatusCard list={free} />
        </div>
      </TabPane>
      <TabPane tab="运行中" key="3">
        <div>
          <DeviceStatusCard list={ongoing} />
        </div>
      </TabPane>
      <TabPane tab="掉线" key="4">
        <div>
          <DeviceStatusCard list={offline} />
        </div>
      </TabPane>
      <TabPane tab="故障" key="5">
        <div>
          <DeviceStatusCard list={broken} />
        </div>
      </TabPane>
    </Tabs>
  );
}

function mapStateToProps(state) {
  return state.devices;
}

export default connect(mapStateToProps)(DeviceStatusPanel);
