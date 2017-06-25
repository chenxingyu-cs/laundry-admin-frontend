import { browserHistory } from 'dva/router';
import { Toast } from 'antd-mobile';
// import pathToRegexp from 'path-to-regexp';
import * as deviceService from '../services/device';

export default {
  namespace: 'devices',
  state: {
    free: [],
    ongoing: [],
    offline: [],
    broken: [],
  },

  reducers: {
    querySuccess(state) {
      const result = deviceService.fetch();
      return { ...state, ...result };
    },

    save(state, { payload: { data } }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *fetch({ payload: { boxId } }, { call }) {
      const { data } = yield call(deviceService.query, boxId);
      if (typeof (data) === 'undefined' ||
          typeof (data.responseEntity) === 'undefined' ||
          typeof (data.responseEntity.status) === 'undefined') {
        Toast.fail('无相应设备,请仔细检查ID');
      } else if (data.responseEntity.status === '空闲') {
        browserHistory.push(`/admin/device/detail/${boxId}`);
      } else if (data.responseEntity.status === '使用中') {
        alert('使用中');   // eslint-disable-line
      }
    },
    *fetchAll({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(deviceService.queryAll);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/admin/device/list') {
          dispatch({ type: 'fetchAll', payload: query });
        }
      });
    },
  },
};
