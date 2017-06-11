import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeNew.css';

function FranchiseeNew() {
  return (
    <div className={styles.normal}>
      Route Component: FranchiseeNew
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(FranchiseeNew);
