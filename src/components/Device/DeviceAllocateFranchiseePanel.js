import React from 'react';
import { SearchBar, Button, List, Radio, WhiteSpace } from 'antd-mobile';
import styles from './DeviceAllocateFranchiseePanel.css';

const RadioItem = Radio.RadioItem;

class DeviceAllocateFranchiseePanel extends React.Component {

  state = {
    keyword: '',
    filteredFranchisees: this.props.franchiseeList,
    selectedFranchiseeId: -1,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredFranchisees: nextProps.franchiseeList,
    });
  }

  onSearch = (keyword) => {
    this.setState({
      filteredFranchisees: this.props.franchiseeList.filter(item => item.name.includes(keyword)),
    });
  }

  onSearchBarChange = (keyword) => {
    this.setState({ keyword });
  };

  onSearchBarSubmit = (value) => {
    this.onSearch(value);
  };

  onClickSearchButton = () => {
    const values = {
      boxIds: this.props.selectedDevices,
      franchiseeId: this.state.selectedFranchiseeId,
    };

    this.props.dispatch({
      type: 'unallocatedDevices/allocateDevices',
      payload: {
        values,
      },
    });
  }

  onRadioItemChange = (value) => {
    this.setState({
      selectedFranchiseeId: value,
    });
  }

  render() {
    return (
      <div className={styles.normal}>
        <SearchBar
          value={this.state.keyword}
          onSubmit={this.onSearchBarSubmit}
          onChange={this.onSearchBarChange}
          cancelText=""
          placeholder="请输入加盟商搜索"
        />

        <WhiteSpace />
        <Button
          onClick={this.onClickSearchButton}
          type="primary"
        >
          查询
        </Button>

        <WhiteSpace />
        <List renderHeader={() => '请选择加盟商'}>
          {this.state.filteredFranchisees.map(franchisee => (
            <RadioItem
              key={franchisee.id}
              checked={this.state.selectedFranchiseeId === franchisee.id}
              onChange={() => this.onRadioItemChange(franchisee.id)}
            >
              {franchisee.name}
            </RadioItem>
          ))}
        </List>

        <WhiteSpace />
        <Button
          onClick={this.onClickSearchButton}
          type="primary"
          className={styles.bottomButton}
          disabled={this.state.selectedFranchiseeId === -1}
        >
          添加
        </Button>
      </div>
    );
  }
}

export default DeviceAllocateFranchiseePanel;
