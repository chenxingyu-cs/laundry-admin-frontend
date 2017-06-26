import React from 'react';
import { List, InputItem, Button, Toast, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import { ROLE_DATA_FOR_PICKER } from '../../utils/roleFormatter';
import styles from './UserEditPanel.css';

// TODO: Add a formattoer accordint to previliege.
// Add 1 for 1 previliege

function BasicInput({ form, franchiseeList, userInfo, dispatch }) {
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
        const actionType = userInfo ? 'adminUsers/edit' : 'adminUsers/create';
        dispatch({
          type: actionType,
          payload: {
            id: userInfo ? userInfo.id : 0,
            name: values.name,
            mobile: values.phone,
            franchiseeId: values.franchisee[0],
            authorityLevel: values.authorityLevel[0],
          },
        });
        console.log('values', values);
      }
    });
  }

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
              initialValue: userInfo ? userInfo.mobile : '',
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
            {...getFieldProps('authorityLevel', {
              rules: [
                { required: true, message: '请选择角色' },
              ],
            })}
            data={ROLE_DATA_FOR_PICKER}
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
