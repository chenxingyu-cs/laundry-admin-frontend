import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { Flex, Picker, List, InputItem, Toast, WhiteSpace } from 'antd-mobile';
import { fromIdList } from '../../utils/pickerHelper';
import styles from './OperationSelectPanel.css';

class OperationSelectPanelExample extends React.Component {
  onFranchiseeChange = (val) => {
    this.props.dispatch({
      type: 'operations/fetchStores',
      payload: {
        val,
      },
    });
  };

  onDay = () => {
    this.props.form.validateFields((error, value) => {
      if (!value.date) {
        Toast.fail('请输入日期');
      } else {
        this.props.dispatch({
          type: 'operations/fetch',
          payload: {
            stat: value,
            mode: 0,
          },
        });
      }
    });
  }

  onMonth = () => {
    this.props.form.validateFields((error, value) => {
      if (!value.date) {
        Toast.fail('请输入日期');
      } else {
        this.props.dispatch({
          type: 'operations/fetch',
          payload: {
            stat: value,
            mode: 1,
          },
        });
      }
    });
  }

  onYear = () => {
    this.props.form.validateFields((error, value) => {
      if (!value.date) {
        Toast.fail('请输入日期');
      } else {
        this.props.dispatch({
          type: 'operations/fetch',
          payload: {
            stat: value,
            mode: 2,
          },
        });
      }
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    const franchisees = fromIdList(this.props.franchisees);
    const stations = fromIdList(this.props.stations);

    return (
      <div className={styles.normal}>
        <List>
          <Picker
            {...getFieldProps('franchiseeId')}
            data={franchisees}
            cols={1}
            title="加盟商"
            onOk={this.onFranchiseeChange}
          >
            <List.Item arrow="horizontal">请选择加盟商</List.Item>
          </Picker>
          <Picker
            {...getFieldProps('stationId')}
            data={stations}
            cols={1}
            title="门店"
          >
            <List.Item arrow="horizontal">请选择门店</List.Item>
          </Picker>
          <InputItem
            extra={'请选择日期'}
            {...getFieldProps('date')}
            type="date"
          >日期选择</InputItem>
          <InputItem
            extra={'请输入编号'}
            {...getFieldProps('boxId')}
            type="boxId"
          >工控机ID</InputItem>
        </List>
        <Flex>
          <Flex.Item>
            <div className={styles.day} onClick={this.onDay}><p className={styles.p}>日统计</p></div>
          </Flex.Item>
          <Flex.Item>
            <div className={styles.month} onClick={this.onMonth}>
              <p className={styles.p}>月统计</p>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div className={styles.year} onClick={this.onYear}><p className={styles.p}>年统计</p></div>
          </Flex.Item>
        </Flex>
        <WhiteSpace />
        <div className={styles.sum}>
          <div className={styles.center}>
            <p>{this.props.sum}</p>
            <p>总销售额(元)</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

const OperationSelectPanel = createForm()(OperationSelectPanelExample);

export default connect(mapStateToProps)(OperationSelectPanel);
