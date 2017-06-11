import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeApp.css';

function FranchiseeApp({ children }) {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(FranchiseeApp);
