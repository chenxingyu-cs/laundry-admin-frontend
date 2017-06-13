import React from 'react';
import { List } from 'antd-mobile';
import { browserHistory } from 'dva/router';
import styles from './FranchiseeListCard.css';

const Item = List.Item;
// const Brief = Item.Brief;

function FranchiseeListCard({ franchiseesListInfo }) {
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
          <div className={styles.header}>加盟商名称</div>
        </Item>

        {franchiseesListInfo.map(franchiseeInfo => (
          <Item
            extra={getPhoneWrapper(franchiseeInfo.phone)}
            arrow="horizontal"
            key={franchiseeInfo.id}
            onClick={() => browserHistory.push(`/admin/franchisee/info/${franchiseeInfo.id}`)}
          >
            {franchiseeInfo.name}
          </Item>
        ))}

      </List>
    </div>
  );
}

export default FranchiseeListCard;
