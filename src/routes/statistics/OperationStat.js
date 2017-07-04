import React from 'react';
import { connect } from 'dva';
import styles from './OperationStat.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import OperationSelectPanel from '../../components/Statistics/OperationSelectPanel';
import OperationListPanel from '../../components/Statistics/OperationListPanel';

function OperationStat({ franchisees, stations, sum, dispatch }) {
  return (
    <MainLayout mainTitle="运营统计">
      <div className={styles.normal}>
        <OperationSelectPanel
          franchisees={franchisees}
          stations={stations}
          sum={sum}
          dispatch={dispatch}
        />
        <OperationListPanel />
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return state.operations;
}

export default connect(mapStateToProps)(OperationStat);
