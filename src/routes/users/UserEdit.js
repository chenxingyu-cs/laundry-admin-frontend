import React from 'react';
import { connect } from 'dva';
import styles from './UserEdit.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import UserEditPanel from '../../components/Users/UserEditPanel';

function UserEdit({ franchiseeList, userList, params, dispatch }) {
  const userInfo = userList.find(item => item.id === parseInt(params.userId, 10));

  return (
    <MainLayout mainTitle="编辑人员信息">
      <div className={styles.normal}>
        <UserEditPanel userInfo={userInfo} franchiseeList={franchiseeList} dispatch={dispatch} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  const { list: franchiseeList } = state.franchisees;
  const { list: userList } = state.adminUsers;
  return { franchiseeList, userList };
}

export default connect(mapStateToProps)(UserEdit);
