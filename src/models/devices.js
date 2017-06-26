import { browserHistory } from 'dva/router';
import { Toast } from 'antd-mobile';
import * as deviceService from '../services/device';

export default {
  namespace: 'devices',
  state: {
    bind: [],
    unbind: [],
  },

  reducers: {
    save(state, { payload: { data } }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *fetch({ payload: { boxId } }, { call }) {
      const { data } = yield call(deviceService.query, boxId);
      if (!data || !data.responseEntity) {
        Toast.fail('无相应设备,请仔细检查ID');
      } else {
        browserHistory.push(`/admin/device/detail/${boxId}`);
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
