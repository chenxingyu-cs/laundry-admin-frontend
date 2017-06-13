import React from 'react';
import { List } from 'antd-mobile';
import { browserHistory } from 'dva/router';
import styles from './FranchiseeListCard.css';

const Item = List.Item;
// const Brief = Item.Brief;

function FranchiseeListCard({ franchiseesListInfo }) {
  return (
    <div className={styles.normal}>
      <List>
        <Item extra="联系电话-----">加盟商名称</Item>
        {franchiseesListInfo.map(franchiseeInfo => (
          <Item
            extra={franchiseeInfo.phone}
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
