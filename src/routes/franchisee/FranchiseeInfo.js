import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeInfo.css';

function FranchiseeInfo() {
  return (
    <div className={styles.normal}>
      Route Component: FranchiseeInfo
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(FranchiseeInfo);
