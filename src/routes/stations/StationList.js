import React from 'react';
import { connect } from 'dva';
import styles from './StationList.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import StationListPanel from '../../components/Stations/StationListPanel';


class StationList extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'stations/fetch',
      payload: {
        page: 1,
      },
    });
  }

  render() {
    return (
      <MainLayout mainTitle="洗衣点管理" rightTitle="添加" rightUrl="/admin/stations/new">
        <div className={styles.normal}>
          <StationListPanel stationList={this.props.list} />
        </div>
      </MainLayout>
    );
  }
}

function mapStateToProps(state) {
  return state.stations;
}

export default connect(mapStateToProps)(StationList);
