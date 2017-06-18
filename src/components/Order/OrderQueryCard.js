import { connect } from 'dva';
import { Accordion, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import React from 'react';
import styles from './OrderQueryCard.css';

class OrderQueryCardExample extends React.Component {

  render() {
    const date = this.props.order.createdTime.split(' ')[0];
    const paid = this.props.order.paid ? '支付成功' : '支付失败';

    return (
      <div className={styles.normal}>
        <Accordion className="my-accordion">
          <Accordion.Panel
            header={`${date} ${this.props.order.type}支付 ${paid} ${this.props.order.price}`}
            className="pad"
          >
            <WhiteSpace size="xs" />
            <table>
              <tbody>
                <tr>
                  <th>交易地址</th>
                  <th>{this.props.order.address}</th>
                </tr>
                <tr>
                  <th>交易时间</th>
                  <th>{this.props.order.createdTime}</th>
                </tr>
                <tr>
                  <th>交易流水号</th>
                  <th>{this.props.order.orderId}</th>
                </tr>
                <tr>
                  <th>洗衣方式</th>
                  <th>{`${this.props.order.machineName} ${this.props.order.functionName}`}</th>
                </tr>
              </tbody>
            </table>
            <WhiteSpace size="xs" />
          </Accordion.Panel>
        </Accordion>
        <WhiteSpace size="xs" />
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

const OrderQueryCard = createForm()(OrderQueryCardExample);

export default connect(mapStateToProps)(OrderQueryCard);
