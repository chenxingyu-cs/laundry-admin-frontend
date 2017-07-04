import { connect } from 'dva';
import { List, WhiteSpace } from 'antd-mobile';
import React from 'react';
import styles from './OperationListPanel.css';

function OperationListPanel({ list }) {
  return (
    <div className={styles.normal}>
      <WhiteSpace />
      <List>
        {list.map(stat =>
          <List.Item key={stat.id}>
            <div className={styles.title}>{stat.name}</div>
            <WhiteSpace size="lg" />
            <div>总销售额(元) <span className={styles.right}>{stat.sum}</span></div>
          </List.Item>,
        )}
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  return state.operations;
}

export default connect(mapStateToProps)(OperationListPanel);
