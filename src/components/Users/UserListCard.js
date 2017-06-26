import React from 'react';
import { List } from 'antd-mobile';
import { browserHistory } from 'dva/router';
import styles from './UserListCard.css';

const Item = List.Item;
const Brief = Item.Brief;

function UserListCard({ infoList }) {
  const telphoneHeader = (
    <div className={styles.headerPhoneNumber}>
      联系电话
    </div>
  );

  function getPhoneWrapper(phoneNumber) {
    const phoneWrapper = (
      <div className={styles.phoneWrapper}>
        {phoneNumber}
      </div>
    );
    return phoneWrapper;
  }

  return (
    <div className={styles.normal}>
      <List>
        <Item
          extra={telphoneHeader}
        >
          <div className={styles.header}>姓名(角色)</div>
        </Item>

        {infoList.map(info => (
          <Item
            extra={getPhoneWrapper(info.mobile)}
            arrow="horizontal"
            key={info.id}
            onClick={() => browserHistory.push(`/admin/users/info/${info.id}`)}
          >
            {info.name}
            <Brief>{info.character}</Brief>
          </Item>
        ))}

      </List>
    </div>
  );
}

export default UserListCard;
