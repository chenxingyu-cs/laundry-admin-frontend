import React from 'react';
import styles from './FranchiseeInfoPanel.css';

function FranchiseeInfoPanel({ info }) {
  return (
    <div className={styles.normal}>
      {info.id}
      {info.name}
    </div>
  );
}

export default FranchiseeInfoPanel;
