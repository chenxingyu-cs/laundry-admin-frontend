import React from 'react';
import { connect } from 'dva';
import styles from './AdminApp.css';

function AdminApp({ children }) {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AdminApp);
