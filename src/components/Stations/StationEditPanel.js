import React from 'react';
import { List, InputItem, Button, Picker, Toast, Checkbox, Accordion, WhiteSpace, Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
import { fromIdList } from '../../utils/pickerHelper';
import styles from './StationEditPanel.css';

const CheckboxItem = Checkbox.CheckboxItem;

class BasicInput extends React.Component {
  state = {
    selectedMachines: [],
    selectedUsers: [],
  }

  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        const formValues = this.props.form.getFieldsValue();
        let { observer, operator, closeTime, openTime } = formValues;
        observer = observer ? observer[0] : 0;
        operator = operator ? operator[0] : 0;
        closeTime = this.formatTime(closeTime);
        openTime = this.formatTime(openTime);
        const machines = this.state.selectedMachines;
        const administrators = this.state.selectedUsers;
        const values = { ...formValues, observer, operator, closeTime, openTime, machines, administrators }; // eslint-disable-line
        console.log('values', values);
        this.props.dispatch({
          type: 'stations/create',
          payload: {
            values,
          },
        });
      }
    });
  }

  onDelete = () => {
    this.props.dispatch({
      type: 'stations/remove',
      payload: {
        id: this.props.stationInfo.id,
      },
    });
  }

  formatTime = (timeData) => {
    const formatted = `${timeData.slice(0, 2)}:${timeData.slice(2)}`;
    return formatted;
  }

  formatTimeToNumber = (timeStringData) => {
    if (timeStringData) {
      const formatted = timeStringData.replace(':', '');
      return parseInt(formatted, 10);
    }
  }

  selectUsers = (value) => {
    console.log('state', this.state.selectedUsers);

    if (this.state.selectedUsers.includes(value)) {
      this.setState({ selectedUsers: this.state.selectedUsers.filter(v => v !== value) });
    } else {
      this.setState({ selectedUsers: [...this.state.selectedUsers, value] });
    }
  }

  selectMachines = (value) => {
    console.log('state', this.state.selectedMachines);

    if (this.state.selectedMachines.includes(value)) {
      this.setState({ selectedMachines: this.state.selectedMachines.filter(v => v !== value) });
    } else {
      this.setState({ selectedMachines: [...this.state.selectedMachines, value] });
    }
  }

  validateTime = (rule, value, callback) => {
    if (value && value.length === 4) {
      callback();
    } else {
      callback(new Error('请输入11位有效电话'));
    }
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const operatorsData = fromIdList(this.props.operators);
    const observersData = fromIdList(this.props.observers);
    return (
      <div className={styles.normal}>
        <form>
          <List
            renderFooter={() => getFieldError('name') && getFieldError('name').join(',')}
          >
            <InputItem
              {...getFieldProps('name', {
                initialValue: this.props.stationInfo.name,
                rules: [
                  { required: true, message: '请输入名称' },
                ],
              })}
              clear
              error={!!getFieldError('name')}
              onErrorClick={() => {
                Toast.fail(getFieldError('name').join('、'), 1);
              }}
              placeholder="请输入名称"
            >
              洗衣点名称
            </InputItem>
            <InputItem
              {...getFieldProps('location', {
                initialValue: this.props.stationInfo.location,
                rules: [
                  { required: true, message: '请输入详细地址' },
                ],
              })}
              clear
              error={!!getFieldError('location')}
              onErrorClick={() => {
                Toast.fail(getFieldError('location').join('、'), 1);
              }}
              placeholder="请输入详细地址"
            >
              洗衣点位置
            </InputItem>
            <InputItem
              {...getFieldProps('ratio', {
                initialValue: this.props.stationInfo.ratio ? this.props.stationInfo.ratio : 100,
                rules: [
                  { required: true, message: '请输入分账比例' },
                ],
              })}
              error={!!getFieldError('ratio')}
              onErrorClick={() => {
                Toast.fail(getFieldError('ratio').join('、'), 1);
              }}
              type="number"
              extra="%"
            >
              分账比例
            </InputItem>

            <InputItem
              {...getFieldProps('openTime', {
                initialValue: this.formatTimeToNumber(this.props.stationInfo.openTime),
                rules: [
                  { required: true, message: '请输入营业开始时间' },
                  { validator: this.validateTime },
                ],
              })}
              clear
              error={!!getFieldError('openTime')}
              onErrorClick={() => {
                Toast.fail(getFieldError('openTime').join('、'), 1);
              }}
              placeholder="0900代表09:00，上午9点"
              type="number"
            >
              营业开始时间
            </InputItem>

            <InputItem
              {...getFieldProps('closeTime', {
                initialValue: this.formatTimeToNumber(this.props.stationInfo.closeTime),
                rules: [
                  { required: true, message: '请输入营业结束时间' },
                  { validator: this.validateTime },
                ],
              })}
              clear
              error={!!getFieldError('closeTime')}
              onErrorClick={() => {
                Toast.fail(getFieldError('closeTime').join('、'), 1);
              }}
              placeholder="1800代表18:00，下午6点"
              type="number"
            >
              营业结束时间
            </InputItem>

            <Picker
              {...getFieldProps('operator')}
              data={observersData}
              cols={1}
            >
              <List.Item arrow="horizontal">维修员</List.Item>
            </Picker>

            <Picker
              {...getFieldProps('observer')}
              data={operatorsData}
              cols={1}
            >
              <List.Item arrow="horizontal">观察员</List.Item>
            </Picker>

          </List>
        </form>

        <Accordion>
          <Accordion.Panel header="选择管理员">
            <List>
              {this.props.administrators.map(user => (
                <CheckboxItem key={user.id} onChange={() => this.selectUsers(user.id)}>
                  {user.name}
                </CheckboxItem>
              ))}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="选择洗衣机">
            <List>
              {this.props.machineList.map(machine => (
                <CheckboxItem
                  key={machine.boxId}
                  onChange={() => this.selectMachines(machine.boxId)}
                >
                  {machine.boxId}
                </CheckboxItem>
              ))}
            </List>
          </Accordion.Panel>
        </Accordion>

        <WhiteSpace />
        <Flex>
          <Flex.Item>
            <Button
              type="primary"
              onClick={this.onSubmit}
              disabled={this.state.selectedUsers.length === 0}
            >
              提交
            </Button>
          </Flex.Item>
          <Flex.Item>
            <Button
              type="primary"
              onClick={this.onDelete}
            >
              删除
            </Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

const StationEditPanel = createForm()(BasicInput);

export default StationEditPanel;
