import React from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './FranchiseeNewPanel.css';

class BasicInput extends React.Component {
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        const values = this.props.form.getFieldsValue();
        this.props.dispatch({
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

  validateName = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('帐号至少4个字符'));
    }
  }

  validatePhone = (rule, value, callback) => {
    if (value && value.length > 12) {
      callback();
    } else {
      callback(new Error('请输入11位有效电话'));
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
                  { required: true, message: '请输入加盟商名称' },
                  { validator: this.validateName },
                ],
              })}
              clear
              error={!!getFieldError('name')}
              onErrorClick={() => {
                Toast.fail(getFieldError('name').join('、'), 1);
              }}
              placeholder="请输入加盟商名称"
            >
              加盟商名称
            </InputItem>
            <InputItem
              {...getFieldProps('phone', {
                rules: [
                  { required: true, message: '请输入加盟商电话' },
                  { validator: this.validatePhone },
                ],
              })}
              error={!!getFieldError('phone')}
              onErrorClick={() => {
                Toast.fail(getFieldError('phone').join('、'), 1);
              }}
              placeholder="请输入加盟商电话"
              type="phone"
            >
              加盟商电话
            </InputItem>
          </List>
        </form>
        <Button type="primary" onClick={this.onSubmit}>提交</Button>
      </div>
    );
  }
}

const FranchiseeNewPanel = createForm()(BasicInput);
export default FranchiseeNewPanel;
