import React from 'react';
import { connect } from 'dva';
import styles from './DeviceApp.css';

function DeviceApp({ children }) {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DeviceApp);
