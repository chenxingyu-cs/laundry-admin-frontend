import React from 'react';
import { Flex } from 'antd-mobile';
import styles from './IndexModuleCard.css';
import IndexModuleItem from './IndexModuleItem';

function IndexModuleCard({ cardInfo }) {
  const { cardTitle, indexModuleItems } = cardInfo;

  const itemList = [];
  for (let count = 0; count < indexModuleItems.length; count += 3) {
    itemList.push(indexModuleItems.slice(count, count + 3));
  }

  if (indexModuleItems.length % 3 !== 0) {
    for (let count = 0; count < 3 - (indexModuleItems.length % 3); count += 1) {
      const tmp = {
        id: indexModuleItems.length + count + 100,
        itemTitle: '',
        itemImg: '',
      };
      itemList[itemList.length - 1].push(tmp);
    }
  }

  const itemListComponent =
    itemList.map((list, index) => (
      <Flex key={index}>
        {list.map(item => (
          <Flex.Item key={item.id}>
            <IndexModuleItem item={item} />
          </Flex.Item>
        ))}
      </Flex>
    ),
  );

  return (
    <div className={styles.normal}>
      <div className={styles.cardTitle}>
        <img className={styles.blueBar} role="presentation" src="http://res.cloudinary.com/xnchen/image/upload/v1497423057/titleHint2_jyeogk.png" />{cardTitle}
      </div>
      <div className={styles.cardItems}>
        {itemListComponent}
      </div>
    </div>
  );
}

export default IndexModuleCard;
