import React from 'react';
import { browserHistory } from 'dva/router';
import { SearchBar, Button, List, Checkbox, WhiteSpace } from 'antd-mobile';
import styles from './DeviceAllocateDevicesPanel.css';

const CheckboxItem = Checkbox.CheckboxItem;

class DeviceAllocateDevicesPanel extends React.Component {
  state = {
    keyword: '',
    filteredDevices: this.props.devices,
    selectedDevices: [],
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredDevices: nextProps.devices,
    });
  }

  onSearch = (keyword) => {
    this.setState({
      filteredDevices: this.props.devices.filter(item => item.boxId.includes(keyword)),
    });
  }

  onSearchBarChange = (keyword) => {
    this.setState({ keyword });
  };

  onSearchBarSubmit = (value) => {
    this.onSearch(value);
  };

  onClickSearchButton = () => {
    browserHistory.push({
      pathname: '/admin/device/allocate/franchisee',
      state: { selectedDevices: this.state.selectedDevices },
    });
  }

  onCheckBoxChange = (value) => {
    if (this.state.selectedDevices.includes(value)) {
      this.setState({ selectedDevices: this.state.selectedDevices.filter(v => v !== value) });
    } else {
      this.setState({ selectedDevices: [...this.state.selectedDevices, value] });
    }
  };

  render() {
    return (
      <div className={styles.normal}>
        <SearchBar
          value={this.state.keyword}
          onSubmit={this.onSearchBarSubmit}
          onChange={this.onSearchBarChange}
          cancelText=""
          placeholder="请输入工控机ID搜索"
        />

        <WhiteSpace />
        <Button
          onClick={this.onClickSearchButton}
          type="primary"
        >
          查询
        </Button>

        <WhiteSpace />
        <List renderHeader={() => '工控机ID'}>
          {this.state.filteredDevices.map(device => (
            <CheckboxItem key={device.boxId} onChange={() => this.onCheckBoxChange(device.boxId)}>
              {device.boxId}
            </CheckboxItem>
          ))}
        </List>

        <WhiteSpace />
        <Button
          onClick={this.onClickSearchButton}
          type="primary"
          className={styles.bottomButton}
          disabled={this.state.selectedDevices.length === 0}
        >
          分配加盟商
        </Button>
      </div>
    );
  }
}

export default DeviceAllocateDevicesPanel;
