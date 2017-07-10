import React from 'react';
import { DatePicker, List, WhiteSpace, Button, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './DeviceOperationLogNewPanel.css';

function BasicInput({ form, dispatch, boxId }) {
  const { getFieldProps, getFieldError } = form;

  function onSubmit() {
    form.validateFields({ force: true }, (error) => {
      if (!error) {
        const inputValues = form.getFieldsValue();
        const errorDate = inputValues.errorDate.format('YYYY-MM-DD');
        const repairDate = inputValues.repairDate.format('YYYY-MM-DD');
        const values = { ...inputValues, errorDate, repairDate, boxId };
        dispatch({
          type: 'deviceDetail/createOperationLog',
          payload: {
            values,
          },
        });
        console.log('values', values);
      }
    });
  }

  return (
    <div className={styles.normal}>
      <form>
        <WhiteSpace />
        <List
          renderFooter={() => getFieldError('errorDate') && getFieldError('errorDate').join(',')}
        >
          <DatePicker
            mode="date"
            title="选择日期"
            extra="选择故障日期"
            {...getFieldProps('errorDate', {
              rules: [
                { required: true, message: '请输入故障日期' },
              ],
            })}
          >
            <List.Item arrow="horizontal">故障日期</List.Item>
          </DatePicker>

          <DatePicker
            mode="date"
            title="选择日期"
            extra="选择修理日期"
            {...getFieldProps('repairDate', {
              rules: [
                { required: true, message: '请输入修理日期' },
              ],
            })}
          >
            <List.Item arrow="horizontal">修理日期</List.Item>
          </DatePicker>
        </List>

        <List renderHeader={() => '故障原因'}>
          <TextareaItem
            {...getFieldProps('issue', {
              rules: [
                { required: true, message: '请输入故障原因' },
              ],
            })}
            rows={5}
            count={200}
          />
        </List>

        <List renderHeader={() => '维修方法'}>
          <TextareaItem
            {...getFieldProps('method', {
              rules: [
                { required: true, message: '请输入维修方法' },
              ],
            })}
            rows={5}
            count={200}
          />
        </List>
      </form>
      <WhiteSpace />
      <WhiteSpace />
      <Button type="primary" onClick={onSubmit}>保存</Button>
    </div>
  );
}


const DeviceOperationLogNewPanel = createForm()(BasicInput);
export default DeviceOperationLogNewPanel;
