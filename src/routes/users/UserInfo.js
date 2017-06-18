import React from 'react';
import { connect } from 'dva';
import styles from './UserInfo.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import UserInfoPanel from '../../components/Users/UserInfoPanel';

function UserInfo() {
  return (
    <MainLayout mainTitle="人员信息">
      <div className={styles.normal}>
        <UserInfoPanel />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserInfo);
