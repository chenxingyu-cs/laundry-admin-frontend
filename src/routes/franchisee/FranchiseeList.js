import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeList.css';
import MainLayout from '../../components/MainLayout/MainLayout';

function FranchiseeList() {
  return (
    <MainLayout mainTitle="加盟商管理" rightTitle="添加">
      <div className={styles.normal}>
        Route Component: FranchiseeList
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(FranchiseeList);
