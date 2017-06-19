import React from 'react';
import { connect } from 'dva';
import styles from './UserList.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import UserListPanel from '../../components/Users/UserListPanel';


class UserList extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'adminUsers/fetch',
      payload: {
        page: 1,
      },
    });
  }

  render() {
    return (
      <MainLayout mainTitle="人员管理" rightTitle="添加" rightUrl="/admin/users/new">
        <div className={styles.normal}>
          <UserListPanel
            dispatch={this.props.dispatch}
            list={this.props.list}
          />
        </div>
      </MainLayout>
    );
  }
}

function mapStateToProps(state) {
  return state.adminUsers;
}

export default connect(mapStateToProps)(UserList);
