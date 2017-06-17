import React from 'react';
import { connect } from 'dva';
import styles from './UserNew.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import UserNewPanel from '../../components/Users/UserNewPanel';

function UserNew({ dispatch }) {
  const franchiseeList = [
    {
      name: 'test1',
      id: 1,
      phone: 'xxxxxxxxx',
    },
    {
      name: 'test2',
      id: 2,
      phone: 'xxxxxxxxx',
    },
    {
      name: 'test3',
      id: 3,
      phone: 'xxxxxxxxx',
    },
  ];

  return (
    <MainLayout mainTitle="新建人员">
      <div className={styles.normal}>
        <UserNewPanel dispatch={dispatch} franchiseeList={franchiseeList} />
      </div>
    </MainLayout>
  );
}

// function mapStateToProps(state) {
//   const { list: franchiseeList} = state.franchisees;
//   return { franchiseeList };
// }
//
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserNew);
