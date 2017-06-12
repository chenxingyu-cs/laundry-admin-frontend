import React from 'react';
import { browserHistory } from 'dva/router';
import styles from './IndexModuleItem.css';

function IndexModuleItem({ item }) {
  return (
    <div className={styles.normal} onClick={() => browserHistory.push(item.url)}>
      <img src={item.itemImg} role="presentation" />
      <div>{item.itemTitle}</div>
    </div>
  );
}

export default IndexModuleItem;
