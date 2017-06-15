import React from 'react';
import { connect } from 'dva';
import styles from './UserApp.css';

function UserApp({ children }) {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserApp);
