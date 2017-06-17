import React from 'react';
import { connect } from 'dva';
import styles from './OrderApp.css';

function OrderApp({ children }) {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(OrderApp);
