import React from 'react';
import { List, Button, WhiteSpace, Modal } from 'antd-mobile';
import { browserHistory } from 'dva/router';
import styles from './FranchiseeInfoPanel.css';

const Item = List.Item;
const alert = Modal.alert;

function FranchiseeInfoPanel({ info, dispatch }) {
  const showAlert = () => {
    const alertInstance = alert('删除', '确定删除么???', [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },    // eslint-disable-line
      { text: '确认', onPress: () => onDelete(), style: { fontWeight: 'bold' } },
    ]);
    setTimeout(() => {
      // 可以调用close方法以在外部close
      alertInstance.close();
    }, 10000);
  };

  const onDelete = () => {
    dispatch({
      type: 'franchisees/remove',
      payload: {
        id: info.id,
      },
    });
  };

  return (
    <div className={styles.normal}>
      <List>
        <Item extra={info.name}>加盟商名称</Item>
        <Item extra={info.phone}>加盟商电话</Item>
      </List>

      <div className={styles.operationButton}>
        <Button type="primary" onClick={() => browserHistory.push(`/admin/franchisee/edit/${info.id}`)}>编辑</Button>
        <WhiteSpace />
        <Button type="primary" onClick={showAlert}>删除</Button>
      </div>
    </div>
  );
}

export default FranchiseeInfoPanel;
