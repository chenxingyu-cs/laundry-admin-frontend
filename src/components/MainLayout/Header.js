import { NavBar } from 'antd-mobile';
import React from 'react';

function Header({ mainTitle, rightTitle }) {
  // rightContent={[
  //   <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
  //   <Icon key="1" type="ellipsis" />,
  // ]}
  const rightTitleText = rightTitle || '';
  const mainTitleText = mainTitle || '';

  return (
    <NavBar
      leftContent="" mode="light" onLeftClick={() => console.log('onLeftClick')}
      rightContent={rightTitleText}
    >
      {mainTitleText}
    </NavBar>
  );
}

export default Header;
