import React from 'react';
import { connect } from 'dva';
import styles from './StationApp.css';

function StationApp({ children }) {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StationApp);
