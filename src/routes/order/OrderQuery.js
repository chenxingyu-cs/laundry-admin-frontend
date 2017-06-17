import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { Button, Flex, List, InputItem, WhiteSpace } from 'antd-mobile';
import MainLayout from '../../components/MainLayout/MainLayout';
import OrderQueryResult from '../../components/Order/OrderQueryResult';
import styles from './OrderQuery.css';

class OrderQueryExample extends React.Component {

  submit = () => {
    this.props.form.validateFields((error, value) => {
      this.props.dispatch({
        type: 'orders/querySuccess',
        payload: { queryData: value },
      });
    });
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <MainLayout mainTitle="交易查询">
        <div className={styles.normal}>
          <List>
            <InputItem
              extra={'请选择日期'}
              {...getFieldProps('date')}
              type="date"
            >日期选择</InputItem>
            <InputItem
              extra={'请输入编号'}
              {...getFieldProps('orderId')}
              type="orderId"
            >订单编号</InputItem>
          </List>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <Flex>
            <Flex.Item>
              <Button className="btn" type="primary" onClick={this.submit}>查询</Button>
            </Flex.Item>
          </Flex>
          <OrderQueryResult />
        </div>
      </MainLayout>
    );
  }
}

function mapStateToProps() {
  return {};
}

const OrderQuery = createForm()(OrderQueryExample);

export default connect(mapStateToProps)(OrderQuery);
