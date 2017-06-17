import React from 'react';
import { connect } from 'dva';
import styles from './UserList.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import UserListPanel from '../../components/Users/UserListPanel';

function UserList({ dispatch }) {
  return (
    <MainLayout mainTitle="人员管理" rightTitle="添加" rightUrl="/admin/users/new">
      <div className={styles.normal}>
        <UserListPanel dispatch={dispatch} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserList);
