import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import IndexModuleCard from '../components/IndexPage/IndexModuleCard';
import {
  INDEX_MANAGE_CARD_INFO,
  INDEX_MACHINE_CARD_INFO,
  INDEX_OPERATION_CARD_INFO,
} from '../utils/constants';

function IndexPage() {
  return (
    <MainLayout mainTitle="净悦洗衣管理">
      <div className={styles.normal}>
        <IndexModuleCard cardInfo={INDEX_MANAGE_CARD_INFO} />
        <IndexModuleCard cardInfo={INDEX_MACHINE_CARD_INFO} />
        <IndexModuleCard cardInfo={INDEX_OPERATION_CARD_INFO} />
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
