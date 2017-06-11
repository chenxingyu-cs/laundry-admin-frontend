import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeList.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import FranchiseeListPanel from '../../components/Franchisee/FranchiseeListPanel';

function FranchiseeList({ list }) {
  return (
    <MainLayout mainTitle="加盟商管理" rightTitle="添加">
      <div className={styles.normal}>
        <FranchiseeListPanel franchiseesListInfo={list} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.franchisees;
}

export default connect(mapStateToProps)(FranchiseeList);
