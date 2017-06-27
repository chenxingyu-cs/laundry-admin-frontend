import React from 'react';
import { connect } from 'dva';
import styles from './UserNew.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import UserEditPanel from '../../components/Users/UserEditPanel';

function UserNew({ dispatch, franchiseeList }) {
  if (franchiseeList.length === 0) {
    dispatch({
      type: 'franchisees/fetch',
      payload: {
        page: 1,
      },
    });
  }

  return (
    <MainLayout mainTitle="新建人员">
      <div className={styles.normal}>
        <UserEditPanel dispatch={dispatch} franchiseeList={franchiseeList} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  const { list: franchiseeList } = state.franchisees;
  return { franchiseeList };
}

export default connect(mapStateToProps)(UserNew);
