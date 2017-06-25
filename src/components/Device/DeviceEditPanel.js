import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { Button, Modal, Flex, Grid, Picker, List, InputItem, Toast } from 'antd-mobile';
import styles from './DeviceEditPanel.css';

class DeviceEditPanelExample extends React.Component {
  state = {
    data: [],
    grid: [],
    type: '',
    price1: '',
    price2: '',
    price3: '',
    price4: '',
    button: true,
  };

  onTypeChange = (val) => {
    console.log(val);
    if (val[0] === 'washer') {
      this.setState({
        type: 'washer',
        data: this.washer,
        grid: [
          {
            icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E6%A0%87%E5%87%86%E6%B4%97_3x_q7gqcu.png',
            text: `价格 ${this.state.price1}元`,
          },
          {
            icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BC%BA%E6%B4%97_3x_b4ky67.png',
            text: `价格 ${this.state.price2}元`,
          },
          {
            icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BF%AB%E6%B4%97_3x_rx5thi.png',
            text: `价格 ${this.state.price3}元`,
          },
          {
            icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E8%BD%BB%E6%9F%94%E6%B4%97_3x_dfbrzh.png',
            text: `价格 ${this.state.price4}元`,
          },
        ],
      });
    } else if (val[0] === 'dryer') {
      this.setState({
        type: 'dryer',
        data: this.dryer,
        grid: [
          {
            icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B210_3x_x6zgly.png',
            text: `价格 ${this.state.price1}元`,
          },
          {
            icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B230_3x_piv7ja.png',
            text: `价格 ${this.state.price2}元`,
          },
          {
            icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B240_3x_qefaif.png',
            text: `价格 ${this.state.price3}元`,
          },
          {
            icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B250_3x_byt7aa.png',
            text: `价格 ${this.state.price4}元`,
          },
        ],
      });
    }
  };

  type = [
    {
      label: '洗衣机',
      value: 'washer',
    },
    {
      label: '烘干机',
      value: 'dryer',
    },
  ];

  washer = [
    {
      label: 'SWNBX2',
      value: 'SWNBX2',
    },
    {
      label: 'SWTX21',
      value: 'SWTX21',
    },
    {
      label: 'SFNBXA',
      value: 'SFNBXA',
    },
    {
      label: 'STEX17',
      value: 'STEX17',
    },
    {
      label: 'STEX77',
      value: 'STEX77',
    },
    {
      label: 'SCL020',
      value: 'SCL020',
    },
    {
      label: 'SCL030',
      value: 'SCL030',
    },
    {
      label: 'SCL040',
      value: 'SCL040',
    },
    {
      label: 'LWS17',
      value: 'LWS17',
    },
  ];

  dryer = [
    {
      label: 'SDEX07',
      value: 'SDEX07',
    },
    {
      label: 'STEX77',
      value: 'STEX77',
    },
    {
      label: 'ST035',
      value: 'ST035',
    },
    {
      label: 'LES17',
      value: 'LES17',
    },
  ];

  changePrice = (index) => {
    Modal.prompt('输入金额', '',
      [
        { text: '取消' },
        {
          text: '提交',
          onPress: value => new Promise((resolve) => {
            if (isNaN(value)) {
              Toast.fail('请输入数字', 1);
            } else if (index === 0) {
              this.setState({
                price1: value,
              });
            } else if (index === 1) {
              this.setState({
                price2: value,
              });
            } else if (index === 2) {
              this.setState({
                price3: value,
              });
            } else if (index === 3) {
              this.setState({
                price4: value,
              });
            }
            setTimeout(() => {
              resolve();
              console.log(`value:${value}`);
              if (this.state.type === 'washer') {
                this.setState({
                  grid: [
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E6%A0%87%E5%87%86%E6%B4%97_3x_q7gqcu.png',
                      text: `价格 ${this.state.price1}元`,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BC%BA%E6%B4%97_3x_b4ky67.png',
                      text: `价格 ${this.state.price2}元`,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BF%AB%E6%B4%97_3x_rx5thi.png',
                      text: `价格 ${this.state.price3}元`,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E8%BD%BB%E6%9F%94%E6%B4%97_3x_dfbrzh.png',
                      text: `价格 ${this.state.price4}元`,
                    },
                  ],
                });
              } else if (this.state.type === 'dryer') {
                this.setState({
                  grid: [
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B210_3x_x6zgly.png',
                      text: `价格 ${this.state.price1}元`,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B230_3x_piv7ja.png',
                      text: `价格 ${this.state.price2}元`,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B240_3x_qefaif.png',
                      text: `价格 ${this.state.price3}元`,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B250_3x_byt7aa.png',
                      text: `价格 ${this.state.price4}元`,
                    },
                  ],
                });
              }
            }, 500);
          }),
        },
      ],
    );
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      this.props.dispatch({
        type: 'deviceDetail/test',
        payload: { testData: value },
      });
    });
  };

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div className={styles.normal}>
        <List>
          <List.Item>工控机编号 <p className={styles.boxId}>{ this.props.boxId }</p></List.Item>
          <InputItem
            {...getFieldProps('deviceId', {
              rules: [
                { required: true, message: '请输入洗衣机编号' },
              ],
            })}
            extra={'请输入编号'}
            type="deviceId"
          >洗衣机编号</InputItem>
          <InputItem
            {...getFieldProps('regCode', {
              rules: [
                { required: true, message: '请输入洗衣机简易识别码' },
              ],
            })}
            extra={'请输入编号'}
            type="regCode"
          >简易识别码</InputItem>
          <Picker
            {...getFieldProps('type', {
              rules: [
                { required: true, message: '请选择洗衣机类型' },
              ],
            })}
            data={this.type}
            title="洗衣机类型"
            extra="请选择"
            onOk={this.onTypeChange}
          >
            <List.Item arrow="horizontal">洗衣机类型</List.Item>
          </Picker>
          <Picker
            {...getFieldProps('model', {
              rules: [
                { required: true, message: '请选择洗衣机型号' },
              ],
            })}
            data={this.state.data}
            title="洗衣机型号"
            extra="请选择"
          >
            <List.Item arrow="horizontal">洗衣机型号</List.Item>
          </Picker>
        </List>
        <Grid
          data={this.state.grid}
          className={styles.price}
          columnNum={2}
          onClick={(_el, index) => this.changePrice(index)}
        />
        <Flex>
          <Flex.Item>
            <Button className="btn" type="primary" onClick={this.submit}>设备测试</Button>
          </Flex.Item>
          <Flex.Item>
            <Button className="btn" disabled={this.state.button} onClick={() => console.log('Disable')}>启用设备</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

const DeviceEditPanel = createForm()(DeviceEditPanelExample);

export default connect(mapStateToProps)(DeviceEditPanel);
