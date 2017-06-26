import React from 'react';
import { connect } from 'dva';
import styles from './AdminApp.css';

class AdminApp extends React.Component {
  state = {
    couldAccess: true,
  };

  componentWillMount() {
    this.props.dispatch({
      type: 'auth/fetch',
      payload: {
        page: 1,
      },
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authorityLevel) {
      if (nextProps.authorityLevel <= 400) {
        this.setState({ couldAccess: true });
      } else {
        this.setState({ couldAccess: false });
      }
    } else {
      this.props.dispatch({
        type: 'auth/fetch',
        payload: {
          page: 1,
        },
      });
    }
  }

  render() {
    if (this.state.couldAccess) {
      return (
        <div className={styles.normal}>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div className={styles.normal}>
          Do not have access!!
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps)(AdminApp);
