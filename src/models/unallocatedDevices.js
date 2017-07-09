import { Toast } from 'antd-mobile';
import { browserHistory } from 'dva/router';
import * as deviceService from '../services/device';

export default {
  namespace: 'unallocatedDevices',
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: { data } }) {
      const result = { list: data };
      return { ...state, ...result };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(deviceService.fetchUnallocated);
      yield put({ type: 'save', payload: { data } });
    },

    *allocateDevices({ payload: { values } }, { call, put }) {
      const { error } = yield call(deviceService.allocateDevices, values);
      yield put({ type: 'reload' });
      if (error) {
        Toast.fail('分配失败，请重试！', 1);
      } else {
        Toast.success('分配成功！', 1);
        browserHistory.push('/admin/device/allocate/devices');
      }
    },

    *reload(action, { put }) {
      yield put({ type: 'fetch', payload: { page: 1 } });
    },
  },
  subscriptions: {},
};
