import React from 'react';
import { SearchBar } from 'antd-mobile';
import styles from './FranchiseeListPanel.css';
import FranchiseeListCard from './FranchiseeListCard';

function FranchiseeListPanel({ franchiseesListInfo, dispatch }) {
  function onSearch(keyword) {
    dispatch({
      type: 'franchisees/filter',
      payload: {
        keyword,
      },
    });
  }

  return (
    <div className={styles.normal}>
      <div>
        <SearchBar placeholder="请输入加盟商搜索" autoFocus onSubmit={value => onSearch(value)} />
      </div>
      <div>
        <FranchiseeListCard franchiseesListInfo={franchiseesListInfo} />
      </div>
    </div>
  );
}

export default FranchiseeListPanel;
