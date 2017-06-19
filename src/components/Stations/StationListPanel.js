import React from 'react';
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
import styles from './StationListPanel.css';
import StationListCard from './StationListCard';


class StationListPanel extends React.Component {
  state = {
    value: '',
    filteredList: this.props.list,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredList: nextProps.stationList,
    });
  }

  onSearch = (keyword) => {
    const filterResult = this.props.stationList.filter((station) => {
      if (station.name.includes(keyword)) {
        return true;
      }
      if (station.machines) {
        const tmp = station.machines.filter(machine => machine.boxId.includes(keyword));
        if (tmp.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    this.setState({
      filteredList: filterResult,
    });
    console.log(keyword);
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
    console.log('comp', this.props.list);
    console.log(this.state.value, 'buttonSubmit');
    this.onSearch(this.state.value);
  }

  render() {
    return (
      <div className={styles.normal}>
        <div>
          <SearchBar
            value={this.state.value}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            cancelText=""
            placeholder="请输入洗衣点或者洗衣机名称搜索"
          />
          <WhiteSpace />
          <Button
            onClick={this.onClickSubmitButton}
            type="primary"
          >
            查询
          </Button>
        </div>

        <WhiteSpace />
        <div>
          <StationListCard stationList={this.state.filteredList} />
        </div>
      </div>
    );
  }
}

export default StationListPanel;
