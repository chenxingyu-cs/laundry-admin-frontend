import React from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './FranchiseeEditPanel.css';

function BasicInput({ form, dispatch, info }) {
  const { getFieldProps, getFieldError } = form;

  function onSubmit() {
    form.validateFields({ force: true }, (error) => {
      if (!error) {
        const values = form.getFieldsValue();
        dispatch({
          type: 'franchisees/create',
          payload: {
            name: values.name,
            phone: values.phone,
          },
        });
      } else {
        Toast.fail('校验失败，请核对后输入', 1);
      }
    });
  }

  function validateName(rule, value, callback) {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('帐号至少4个字符'));
    }
  }

  function validatePhone(rule, value, callback) {
    if (value && value.length > 12) {
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
              initialValue: info.name,
              rules: [
                { required: true, message: '请输入加盟商名称' },
                { validator: validateName },
              ],
            })}
            clear
            error={!!getFieldError('name')}
            onErrorClick={() => {
              Toast.fail(getFieldError('name').join('、'), 1);
            }}
          >
            加盟商名称
          </InputItem>
          <InputItem
            {...getFieldProps('phone', {
              initialValue: info.phone,
              rules: [
                { required: true, message: '请输入加盟商电话' },
                { validator: validatePhone },
              ],
            })}
            error={!!getFieldError('phone')}
            onErrorClick={() => {
              Toast.fail(getFieldError('phone').join('、'), 1);
            }}
            type="phone"
          >
            加盟商电话
          </InputItem>
        </List>
      </form>
      <Button type="primary" onClick={onSubmit}>提交</Button>
    </div>
  );
}

const FranchiseeEditPanel = createForm()(BasicInput);
export default FranchiseeEditPanel;
