import React from 'react';
import styles from './MainLayout.css';
import Header from './Header';

function MainLayout({ mainTitle, rightTitle, children }) {
  return (
    <div className={styles.normal}>
      <Header mainTitle={mainTitle} rightTitle={rightTitle} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
