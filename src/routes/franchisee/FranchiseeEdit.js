import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeEdit.css';

function FranchiseeEdit() {
  return (
    <div className={styles.normal}>
      Route Component: FranchiseeEdit
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(FranchiseeEdit);
