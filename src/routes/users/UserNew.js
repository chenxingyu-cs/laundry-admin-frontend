import React from 'react';
import { connect } from 'dva';
import styles from './UserNew.css';
import MainLayout from '../../components/MainLayout/MainLayout';

function UserNew() {
  return (
    <MainLayout mainTitle="新建人员">
      <div className={styles.normal}>
        User New
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserNew);
