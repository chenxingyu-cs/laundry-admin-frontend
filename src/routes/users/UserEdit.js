import React from 'react';
import { connect } from 'dva';
import styles from './UserEdit.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import UserEditPanel from '../../components/Users/UserEditPanel';

function UserEdit() {
  return (
    <MainLayout mainTitle="编辑人员信息">
      <div className={styles.normal}>
        <UserEditPanel />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserEdit);
