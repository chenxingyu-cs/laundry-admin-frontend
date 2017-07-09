import React from 'react';
import { Flex, Button, Modal, Grid, List, Toast } from 'antd-mobile';
import styles from './DeviceDetailPanel.css';

class DeviceDetailPanel extends React.Component {
  state = {
    data: this.props.boxInfo.washer === true ?
    [
      {
        icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E6%A0%87%E5%87%86%E6%B4%97_3x_q7gqcu.png',
        price: this.props.boxInfo.functions[0].price,
      },
      {
        icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BC%BA%E6%B4%97_3x_b4ky67.png',
        price: this.props.boxInfo.functions[1].price,
      },
      {
        icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BF%AB%E6%B4%97_3x_rx5thi.png',
        price: this.props.boxInfo.functions[2].price,
      },
      {
        icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E8%BD%BB%E6%9F%94%E6%B4%97_3x_dfbrzh.png',
        price: this.props.boxInfo.functions[3].price,
      },
    ] : [
      {
        icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B230_3x_piv7ja.png',
        price: this.props.boxInfo.functions[0].price,
      },
      {
        icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B240_3x_qefaif.png',
        price: this.props.boxInfo.functions[1].price,
      },
      {
        icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B250_3x_byt7aa.png',
        price: this.props.boxInfo.functions[2].price,
      },
      {
        icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B210_3x_x6zgly.png',
        price: this.props.boxInfo.functions[3].price,
      },
    ],
    price1: this.props.boxInfo.functions[0].price,
    price2: this.props.boxInfo.functions[1].price,
    price3: this.props.boxInfo.functions[2].price,
    price4: this.props.boxInfo.functions[3].price,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.boxInfo.washer === true ?
      [
        {
          icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E6%A0%87%E5%87%86%E6%B4%97_3x_q7gqcu.png',
          price: nextProps.boxInfo.functions[0].price,
        },
        {
          icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BC%BA%E6%B4%97_3x_b4ky67.png',
          price: nextProps.boxInfo.functions[1].price,
        },
        {
          icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BF%AB%E6%B4%97_3x_rx5thi.png',
          price: nextProps.boxInfo.functions[2].price,
        },
        {
          icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E8%BD%BB%E6%9F%94%E6%B4%97_3x_dfbrzh.png',
          price: nextProps.boxInfo.functions[3].price,
        },
      ] : [
        {
          icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B230_3x_piv7ja.png',
          price: nextProps.boxInfo.functions[0].price,
        },
        {
          icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B240_3x_qefaif.png',
          price: nextProps.boxInfo.functions[1].price,
        },
        {
          icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B250_3x_byt7aa.png',
          price: nextProps.boxInfo.functions[2].price,
        },
        {
          icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B210_3x_x6zgly.png',
          price: nextProps.boxInfo.functions[3].price,
        },
      ],
      price1: nextProps.boxInfo.functions[0].price,
      price2: nextProps.boxInfo.functions[1].price,
      price3: nextProps.boxInfo.functions[2].price,
      price4: nextProps.boxInfo.functions[3].price,
    });
  }

  onTest = () => {
    const value = {
      deviceId: this.props.boxInfo.deviceId,
      qrcode: this.props.boxInfo.qrcode,
      model: this.props.boxInfo.deviceModel,
      type: this.props.boxInfo.washer === true ? 'washer' : 'dryer',
    };
    this.props.dispatch({
      type: 'deviceDetail/test',
      payload: {
        boxId: this.props.boxInfo.boxId,
        testData: value,
        fee1: this.state.price1,
        fee2: this.state.price2,
        fee3: this.state.price3,
        fee4: this.state.price4,
      },
    });
  };

  submit = () => {
    this.props.dispatch({
      type: 'deviceDetail/update',
      payload: {
        boxId: this.props.boxInfo.boxId,
        fee1: this.state.price1,
        fee2: this.state.price2,
        fee3: this.state.price3,
        fee4: this.state.price4,
      },
    });
  };

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
              if (this.props.boxInfo.washer === true) {
                this.setState({
                  data: [
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E6%A0%87%E5%87%86%E6%B4%97_3x_q7gqcu.png',
                      price: this.state.price1,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BC%BA%E6%B4%97_3x_b4ky67.png',
                      price: this.state.price2,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E5%BF%AB%E6%B4%97_3x_rx5thi.png',
                      price: this.state.price3,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370399/%E8%BD%BB%E6%9F%94%E6%B4%97_3x_dfbrzh.png',
                      price: this.state.price4,
                    },
                  ],
                });
              } else {
                this.setState({
                  data: [
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B230_3x_piv7ja.png',
                      price: this.state.price1,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B240_3x_qefaif.png',
                      price: this.state.price2,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B250_3x_byt7aa.png',
                      price: this.state.price3,
                    },
                    {
                      icon: 'http://res.cloudinary.com/xnchen/image/upload/v1498370381/%E7%83%98%E5%B9%B210_3x_x6zgly.png',
                      price: this.state.price4,
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

  render() {
    return (
      <div className={styles.normal}>
        <List>
          <List.Item>
            工控机编号
            <p className={styles.id}>{ this.props.boxInfo.boxId }</p>
          </List.Item>
          <List.Item>
            洗衣机编号
            <p className={styles.id}>{ this.props.boxInfo.deviceId }</p>
          </List.Item>
          <List.Item>
            简易识别码
            <p className={styles.id}>{ this.props.boxInfo.qrcode }</p>
          </List.Item>
          <List.Item>
            洗衣机类型
            <p className={styles.id}>{ this.props.boxInfo.deviceName }</p>
          </List.Item>
          <List.Item>
            洗衣机型号
            <p className={styles.id}>{ this.props.boxInfo.deviceModel }</p>
          </List.Item>
        </List>
        <Grid
          data={this.state.data}
          className={styles.price}
          columnNum={2}
          onClick={(_el, index) => this.changePrice(index)}
          renderItem={dataItem => (
            <div style={{ padding: '0.25rem' }}>
              <img src={dataItem.icon} style={{ width: '1.5rem', height: '1.5rem' }} alt="icon" />
              <div style={{ fontSize: '0.30rem', marginTop: '0.24rem' }}>
                <span>价格 {dataItem.price} 元</span>
              </div>
            </div>
          )}
        />
        <Flex>
          <Flex.Item>
            <Button className="btn" type="primary" onClick={this.onTest}>设备测试</Button>
          </Flex.Item>
          <Flex.Item>
            <Button className="btn" disabled={this.props.test} onClick={this.submit}>启用设备</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default DeviceDetailPanel;
