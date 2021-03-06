import { browserHistory } from 'dva/router';
import { Toast } from 'antd-mobile';
import * as stationService from '../services/station';

export default {
  namespace: 'stations',
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
      const { data } = yield call(stationService.fetch);
      yield put({ type: 'save', payload: { data } });
    },

    *create({ payload: { values } }, { call }) {
      const { data, error } = yield call(stationService.create, values);
      console.log('data', data, error);
      if (data.status === 'OK') {
        Toast.success('新建成功！', 1);
        browserHistory.push('/admin/stations/list');
      } else {
        Toast.fail('新建失败，请重试！', 1);
      }
    },

    *edit({ payload: { id, values } }, { call }) {
      const { error } = yield call(stationService.edit, id, values);
      if (error) {
        Toast.fail('修改失败，请重试！', 1);
      } else {
        Toast.success('修改成功！', 1);
        browserHistory.push('/admin/stations/list');
      }
    },

    *remove({ payload: { id } }, { call }) {
      const { error } = yield call(stationService.remove, id);
      if (error) {
        Toast.fail('删除失败，请重试！', 1);
      } else {
        Toast.success('删除成功！', 1);
        browserHistory.push('/admin/stations/list');
      }
    },
  },
  subscriptions: {},
};
