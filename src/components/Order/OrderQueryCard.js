import { connect } from 'dva';
import { Accordion, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './OrderQueryCard.css';

const Item = List.Item;

class OrderQueryCardExample extends React.Component {

  render() {
    const orderId = this.props.order.orderId;
    const paid = this.props.order.paid?'支付成功':'支付失败';
    const price = this.props.order.price;
    const time = this.props.order.createdTime;
    const date = time.split(' ')[0];
    const type = this.props.order.type;
    const location = this.props.order.address;
    const machine = this.props.order.machineName + ' ' + this.props.order.functionName;

    return (
      <Accordion className="my-accordion">
        <Accordion.Panel
          header={ date + " " + type + "支付 " + paid + " " + price + "元" }
          className="pad"
        >
          <List>
            <Item>交易地址: {location}</Item>
            <Item>交易时间: {time}</Item>
            <Item>交易流水号: {orderId}</Item>
            <Item>洗衣方式: {machine}</Item>
          </List>
        </Accordion.Panel>
      </Accordion>
    );
  }
}

function mapStateToProps() {
  return {};
}

const OrderQueryCard = createForm()(OrderQueryCardExample);

export default connect(mapStateToProps)(OrderQueryCard);
