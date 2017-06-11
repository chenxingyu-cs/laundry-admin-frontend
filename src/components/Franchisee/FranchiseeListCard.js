import React from 'react';
import { List } from 'antd-mobile';
import styles from './FranchiseeListCard.css';

const Item = List.Item;
// const Brief = Item.Brief;

function FranchiseeListCard({ franchiseesListInfo }) {
  return (
    <div className={styles.normal}>
      <List>
        <Item extra="联系电话----">加盟商名称</Item>
        {franchiseesListInfo.map(franchiseeInfo => (
          <Item
            extra={franchiseeInfo.phone}
            arrow="horizontal"
            key={franchiseeInfo.id}
            onClick={() => {}}
          >
            {franchiseeInfo.name}
          </Item>
        ))}

      </List>
    </div>
  );
}

export default FranchiseeListCard;
