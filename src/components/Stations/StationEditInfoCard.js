import React from 'react';
import { List, InputItem, Button, Toast, Checkbox } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './StationEditInfoCard.css';

const CheckboxItem = Checkbox.CheckboxItem;

// const characters = [
//   {
//     label: '管理员',
//     value: '1',
//   },
//   {
//     label: '修理员',
//     value: '2',
//   },
//   {
//     label: '观察员',
//     value: '3',
//   },
// ];

class BasicInput extends React.Component {
  state = {
    selectedMachines: [],
  }

  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        const values = this.props.form.getFieldsValue();
        // dispatch({
        //   type: 'franchisees/edit',
        //   payload: {
        //     name: values.name,
        //     phone: values.phone,
        //   },
        // });
        console.log('values', values);
      }
    });
  }

  selectOnChange = (value) => {
    console.log('state', this.state.selectedMachines);

    if (this.state.selectedMachines.includes(value)) {
      this.setState({ selectedMachines: this.state.selectedMachines.filter(v => v !== value) });
    } else {
      this.setState({ selectedMachines: [...this.state.selectedMachines, value] });
    }
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div className={styles.inputPanel}>
        <form>
          <List
            renderFooter={() => getFieldError('name') && getFieldError('name').join(',')}
          >
            <InputItem
              {...getFieldProps('name', {
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
              {...getFieldProps('phone', {
                initialValue: 100,
                rules: [
                  { required: true, message: '请输入分账比例' },
                ],
              })}
              error={!!getFieldError('phone')}
              onErrorClick={() => {
                Toast.fail(getFieldError('phone').join('、'), 1);
              }}
              type="number"
              disabled
              extra="%"
            >
              分账比例
            </InputItem>

          </List>
        </form>

        <div>
          <List>
            {this.props.machineList.map(machine => (
              <CheckboxItem key={machine.value} onChange={() => this.selectOnChange(machine.value)}>
                {machine.label}
              </CheckboxItem>
            ))}
          </List>
        </div>

        <Button type="primary" onClick={this.onSubmit}>提交</Button>
      </div>
    );
  }
}

const StationEditInfoCard = createForm()(BasicInput);
export default StationEditInfoCard;
