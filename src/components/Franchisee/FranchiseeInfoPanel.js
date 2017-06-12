import React from 'react';
import { List } from 'antd-mobile';
import styles from './FranchiseeInfoPanel.css';

const Item = List.Item;

function FranchiseeInfoPanel({ info }) {
  return (
    <div className={styles.normal}>
      <List>
        <Item extra={info.name}>加盟商名称</Item>
        <Item extra={info.phone}>加盟商电话</Item>
      </List>
    </div>
  );
}

export default FranchiseeInfoPanel;
