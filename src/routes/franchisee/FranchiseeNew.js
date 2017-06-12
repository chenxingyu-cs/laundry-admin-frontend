import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeNew.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import FranchiseeNewPanel from '../../components/Franchisee/FranchiseeNewPanel';

function FranchiseeNew({ dispatch }) {
  return (
    <MainLayout mainTitle="新建加盟商">
      <div className={styles.normal}>
        <FranchiseeNewPanel dispatch={dispatch} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(FranchiseeNew);
