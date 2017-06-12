import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeInfo.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import FranchiseeInfoPanel from '../../components/Franchisee/FranchiseeInfoPanel';

function FranchiseeInfo({ params, list }) {
  const franchiseeInfo = list.find(item => item.id === parseInt(params.franchiseeId, 10));
  return (
    <MainLayout mainTitle="加盟商信息">
      <div className={styles.normal}>
        <FranchiseeInfoPanel info={franchiseeInfo} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.franchisees;
}

export default connect(mapStateToProps)(FranchiseeInfo);
