import React from 'react';
import { List, InputItem, Button, Toast, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './UserEditPanel.css';

const characters = [
  {
    label: '管理员',
    value: '1',
  },
  {
    label: '修理员',
    value: '2',
  },
  {
    label: '观察员',
    value: '3',
  },
];

// const test = { label: '测试加盟商', value: info.id };

// TODO: Add a formattoer accordint to previliege.
// Add 1 for 1 previliege

function BasicInput({ form, franchiseeList, userInfo }) {
  const { getFieldProps, getFieldError } = form;

  function formatListToPickerData(infoList) {
    console.log('formatting...');
    return infoList.map((info) => {
      return { label: info.name, value: info.id };
    });
  }

  function onSubmit() {
    form.validateFields({ force: true }, (error) => {
      if (!error) {
        const values = form.getFieldsValue();
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

  // function validateName(rule, value, callback) {
  //   if (value && value.length > 0) {
  //     callback();
  //   } else {
  //     callback(new Error('姓名至少4个字符'));
  //   }
  // }

  function validatePhone(rule, value, callback) {
    if (value && value.length >= 11) {
      callback();
    } else {
      callback(new Error('请输入11位有效电话'));
    }
  }

  return (
    <div className={styles.inputPanel}>
      <form>
        <List
          renderFooter={() => getFieldError('name') && getFieldError('name').join(',')}
        >
          <InputItem
            {...getFieldProps('name', {
              initialValue: userInfo ? userInfo.name : '',
              rules: [
                { required: true, message: '请输入姓名' },
              ],
            })}
            clear
            error={!!getFieldError('name')}
            onErrorClick={() => {
              Toast.fail(getFieldError('name').join('、'), 1);
            }}
            placeholder={userInfo ? '' : '请输入姓名'}
          >
            姓名
          </InputItem>
          <InputItem
            {...getFieldProps('phone', {
              initialValue: userInfo ? userInfo.phone : '',
              rules: [
                { required: true, message: '请输入手机号码' },
                { validator: validatePhone },
              ],
            })}
            error={!!getFieldError('phone')}
            onErrorClick={() => {
              Toast.fail(getFieldError('phone').join('、'), 1);
            }}
            type="number"
            placeholder={userInfo ? '' : '请输入手机号码'}
          >
            手机号码
          </InputItem>

          <Picker
            {...getFieldProps('franchisee', {
              rules: [
                { required: true, message: '请选择加盟商' },
              ],
            })}
            data={formatListToPickerData(franchiseeList)}
            cols={1}
          >
            <List.Item arrow="horizontal">加盟商</List.Item>
          </Picker>

          <Picker
            {...getFieldProps('character', {
              rules: [
                { required: true, message: '请选择角色' },
              ],
            })}
            data={characters}
            cols={1}
          >
            <List.Item arrow="horizontal">角色</List.Item>
          </Picker>

        </List>
      </form>
      <Button type="primary" onClick={onSubmit}>提交</Button>
    </div>
  );
}

const UserEditPanel = createForm()(BasicInput);
export default UserEditPanel;
