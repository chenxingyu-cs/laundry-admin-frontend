import { connect } from 'dva';
import { List } from 'antd-mobile';
import React from 'react';
import styles from './OrderQueryResult.css';

const Item = List.Item;
const Brief = Item.Brief;

function OrderQueryResult({ ongoing, finished }) {
  return (
    <div className={styles.normal}>
      <List>
        {ongoing.map(order =>
          <Item arrow="horizontal" multipleLine>
            {order.address} | {order.machineName} | {order.functionName}
            <Brief>
              完成时间: {order.finishTimestamp}
            </Brief>
          </Item>,
        )}
        {finished.map(order =>
          <Item arrow="horizontal" multipleLine>
            {order.address} | {order.machineName} | {order.functionName}
            <Brief>
              完成时间: {order.finishTimestamp}
            </Brief>
          </Item>,
        )}
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  const { ongoing, finished } = state.orders;
  return { ongoing, finished };
}

export default connect(mapStateToProps)(OrderQueryResult);
