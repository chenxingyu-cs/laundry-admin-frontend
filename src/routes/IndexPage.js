import React from 'react';
import { connect } from 'dva';
// import { Flex, WhiteSpace } from 'antd-mobile';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';

function IndexPage() {
  return (
    <MainLayout mainTitle="净悦洗衣管理">
      <div className={styles.normal}>
        <h3> Index Page </h3>
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
