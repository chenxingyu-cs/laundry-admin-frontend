import { NavBar, Icon } from 'antd-mobile';
import React from 'react';

function Header() {
  return (
    <NavBar
      leftContent="back" mode="light" onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >导航</NavBar>
  );
}

export default Header;
