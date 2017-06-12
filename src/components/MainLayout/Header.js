import { NavBar } from 'antd-mobile';
import { Link, browserHistory } from 'dva/router';
import React from 'react';
import styles from './Header.css';

function Header({ mainTitle, rightTitle, rightDestination }) {
  // rightContent={[
  //   <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
  //   <Icon key="1" type="ellipsis" />,
  // ]}
  const rightTitleText = rightTitle || '';
  const mainTitleText = mainTitle || '';
  const rightDestinationUrl = rightDestination || '#';

  const rightContentComponent = (
    <div>
      <Link className={styles.rightTitleLink} to={rightDestinationUrl}>{rightTitleText}</Link>
    </div>
  );

  return (
    <NavBar
      leftContent="" mode="light" onLeftClick={() => browserHistory.goBack()}
      rightContent={rightContentComponent}
    >
      {mainTitleText}
    </NavBar>
  );
}

export default Header;
