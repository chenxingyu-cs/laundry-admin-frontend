import { connect } from 'dva';
import { List } from 'antd-mobile';
import React from 'react';
import styles from './OrderQueryResult.css';
import OrderQueryCard from './OrderQueryCard';

const Item = List.Item;
const Brief = Item.Brief;

function OrderQueryResult({ ongoing, finished }) {
  return (
    <div className={styles.normal}>
      {ongoing.map(order =>
        <OrderQueryCard order={order} key={order.orderId} />
      )}
      {finished.map(order =>
        <OrderQueryCard order={order} key={order.orderId} />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  const { ongoing, finished } = state.orders;
  return { ongoing, finished };
}

export default connect(mapStateToProps)(OrderQueryResult);
