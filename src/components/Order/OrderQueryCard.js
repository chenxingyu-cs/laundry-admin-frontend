import { connect } from 'dva';
import { Accordion, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './OrderQueryCard.css';

const Item = List.Item;

class OrderQueryCardExample extends React.Component {

  render() {
    const orderId = this.props.order.orderId;
    const paid = this.props.order.paid;
    const price = this.props.order.price;
    const time = this.props.order.createdTimestamp;
    const type = this.props.order.type;

    return (
      <Accordion className="my-accordion">
        <Accordion.Panel
          header={ type + "支付 " + paid + " " + price + "元" }
          className="pad"
        >
          <List>
            <Item>交易时间:   {time}</Item>
            <Item>交易流水号: {orderId}</Item>
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
