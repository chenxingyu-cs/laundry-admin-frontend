import React from 'react';
import { List, Button, WhiteSpace, Toast } from 'antd-mobile';
import { browserHistory } from 'dva/router';
import styles from './FranchiseeInfoPanel.css';

const Item = List.Item;

function FranchiseeInfoPanel({ info }) {
  function onDelete() {
    Toast.fail('delete? ', 1);
  }

  return (
    <div className={styles.normal}>
      <List>
        <Item extra={info.name}>加盟商名称</Item>
        <Item extra={info.phone}>加盟商电话</Item>
      </List>

      <div className={styles.operationButton}>
        <Button type="primary" onClick={() => browserHistory.push(`/admin/franchisee/edit/${info.id}`)}>编辑</Button>
        <WhiteSpace />
        <Button type="primary" onClick={onDelete}>删除</Button>
      </div>
    </div>
  );
}

export default FranchiseeInfoPanel;
