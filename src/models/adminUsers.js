import { browserHistory } from 'dva/router';
import { Toast } from 'antd-mobile';
import * as adminUserService from '../services/adminUser';


export default {
  namespace: 'adminUsers',
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
      const { data } = yield call(adminUserService.fetch);
      yield put({ type: 'save', payload: { data } });
    },

    *create({ payload: { name, mobile, franchiseeId, authorityLevel } }, { call }) {
      const { data } = yield call(adminUserService.create,
        name, mobile, franchiseeId, authorityLevel);
      if (data.status && data.status === 'OK') {
        Toast.success('新建成功！', 1);
        browserHistory.push('/admin/users/list');
      } else {
        Toast.fail('新建失败，请重试！', 1);
      }
    },

    *edit({ payload: { id, name, mobile, franchiseeId, authorityLevel } }, { call }) {
      const { data } = yield call(adminUserService.edit,
        id, name, mobile, franchiseeId, authorityLevel);
      if (data.status && data.status === 'OK') {
        Toast.success('修改成功！', 1);
        browserHistory.push('/admin/users/list');
      } else {
        Toast.fail('修改失败，请重试！', 1);
      }
    },

    *remove({ payload: { id } }, { call }) {
      const { data } = yield call(adminUserService.remove, id);
      if (data.status && data.status === 'OK') {
        Toast.success('删除成功！', 1);
        browserHistory.push('/admin/users/list');
      } else {
        Toast.fail('删除失败，请重试！', 1);
      }
    },

  },

  subscriptions: {},
};
