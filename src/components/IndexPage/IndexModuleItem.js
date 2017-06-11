import React from 'react';
import styles from './IndexModuleItem.css';

function IndexModuleItem({ item }) {
  return (
    <div className={styles.normal}>
      <img src={item.itemImg} role="presentation" />
      <div>{item.itemTitle}</div>
    </div>
  );
}

export default IndexModuleItem;
