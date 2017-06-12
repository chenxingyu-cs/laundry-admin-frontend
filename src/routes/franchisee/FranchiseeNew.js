import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeNew.css';
import MainLayout from '../../components/MainLayout/MainLayout';

function FranchiseeNew() {
  return (
    <MainLayout mainTitle="新建加盟商">
      <div className={styles.normal}>
        new
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(FranchiseeNew);
