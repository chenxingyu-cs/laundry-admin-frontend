import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeEdit.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import FranchiseeEditPanel from '../../components/Franchisee/FranchiseeEditPanel';

function FranchiseeEdit({ params, list, dispatch }) {
  const franchiseeInfo = list.find(item => item.id === parseInt(params.franchiseeId, 10));
  return (
    <MainLayout mainTitle="编辑加盟商信息">
      <div className={styles.normal}>
        <FranchiseeEditPanel info={franchiseeInfo} dispatch={dispatch} />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.franchisees;
}

export default connect(mapStateToProps)(FranchiseeEdit);
