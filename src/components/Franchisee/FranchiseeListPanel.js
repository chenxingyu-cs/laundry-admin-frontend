import React from 'react';
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
import styles from './FranchiseeListPanel.css';
import FranchiseeListCard from './FranchiseeListCard';

class FranchiseeListPanel extends React.Component {
  state = {
    value: '',
  };

  onSearch = (keyword) => {
    this.props.dispatch({
      type: 'franchisees/filter',
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

  render() {
    return (
      <div className={styles.normal}>
        <div>
          <SearchBar
            value={this.state.value}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            cancelText=""
            placeholder="请输入加盟商搜索"
          />
          <WhiteSpace />
          <Button
            onClick={this.onClickSubmitButton}
            type="primary"
          >
            搜索
          </Button>
        </div>

        <WhiteSpace />

        <div>
          <FranchiseeListCard franchiseesListInfo={this.props.franchiseesListInfo} />
        </div>
      </div>
    );
  }
}

export default FranchiseeListPanel;
