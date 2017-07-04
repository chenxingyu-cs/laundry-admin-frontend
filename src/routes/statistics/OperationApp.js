import React from 'react';
import { connect } from 'dva';
import styles from './OperationApp.css';

function OperationApp({ children }) {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(OperationApp);
