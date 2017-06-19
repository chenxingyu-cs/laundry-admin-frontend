import React from 'react';
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
import styles from './DeviceSearchPanel.css';

class DeviceSearchPanel extends React.Component {
  state = {
    value: '',
  };

  onSearch = (keyword) => {
    this.props.dispatch({
      type: 'device/query',
      payload: {
        keyword,
      },
    });
  }

  onChange = (value) => {
    console.log(value, 'onChange');
    this.setState({ value });
  };

  onSubmit = (value) => {
    console.log(value, 'onSubmit');
    this.onSearch(value);
  };

  onClickSubmitButton = () => {
    console.log(this.state.value, 'buttonSubmit');
    this.onSearch(this.state.value);
  }

  scan = () => {
    alert('扫一扫'); // eslint-disable-line
    wx.scanQRCode({ // eslint-disable-line
      needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
      // 可以指定扫二维码还是一维码，默认二者都有
      scanType:['qrCode', 'barCode'], // eslint-disable-line
      success: function (res) { // eslint-disable-line
        let result = res.resultStr; // eslint-disable-line
      },
    });
  }

  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.bar}>
          <SearchBar
            title={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" alt="icon" style={{ width: '0.56rem', height: '0.56rem' }} />}
            value={this.state.value}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            cancelText=""
            placeholder="请输入工控机ID或扫码搜索"
          />
        </div>
        <div className={styles.badge}>
          <img
            src="http://widgetsmartloc.esy.es/icons/qr-scanner.png"
            alt="Scan QR Code"
            onClick={this.scan}
          />
        </div>
        <WhiteSpace />
        <Button
          onClick={this.onClickSubmitButton}
          type="primary"
        >
          搜索
        </Button>
        <WhiteSpace />
      </div>
    );
  }
}

export default DeviceSearchPanel;
