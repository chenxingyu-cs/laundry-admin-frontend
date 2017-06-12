import React from 'react';
import { connect } from 'dva';
import styles from './FranchiseeInfo.css';
import FranchiseeInfoPanel from '../../components/Franchisee/FranchiseeInfoPanel';

function FranchiseeInfo({ params, list }) {
  const franchiseeInfo = list.find(item => item.id === parseInt(params.franchiseeId, 10));
  return (
    <div className={styles.normal}>
      <FranchiseeInfoPanel info={franchiseeInfo} />
    </div>
  );
}

function mapStateToProps(state) {
  return state.franchisees;
}

export default connect(mapStateToProps)(FranchiseeInfo);
