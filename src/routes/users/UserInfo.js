import React from 'react';
import { connect } from 'dva';
import styles from './UserInfo.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import UserInfoPanel from '../../components/Users/UserInfoPanel';

function UserInfo({ list, params, dispatch }) {
  const userInfo = list.find(item => item.id === parseInt(params.userId, 10));
  return (
    <MainLayout mainTitle="人员信息">
      <div className={styles.normal}>
        <UserInfoPanel info={userInfo} dispatch={dispatch} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.adminUsers;
}

export default connect(mapStateToProps)(UserInfo);
