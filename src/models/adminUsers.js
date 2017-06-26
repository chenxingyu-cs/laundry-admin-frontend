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
      console.log(name, mobile, franchiseeId, authorityLevel);
      const { error } = yield call(adminUserService.create,
        name, mobile, franchiseeId, authorityLevel);
      if (error) {
        Toast.fail('新建失败，请重试！', 1);
      } else {
        Toast.success('新建成功！', 1);
        browserHistory.push('/admin/users/list');
      }
    },

    *edit({ payload: { id, name, mobile, franchiseeId, authorityLevel } }, { call }) {
      console.log(id, name, mobile, franchiseeId, authorityLevel);
      const { error } = yield call(adminUserService.edit,
        id, name, mobile, franchiseeId, authorityLevel);
      if (error) {
        Toast.fail('编辑失败，请重试！', 1);
      } else {
        Toast.success('编辑成功！', 1);
        browserHistory.push('/admin/users/list');
      }
    },

    *remove({ payload: { id } }, { call }) {
      const { error } = yield call(adminUserService.remove, id);
      if (error) {
        Toast.fail('删除失败，请重试！', 1);
      } else {
        Toast.success('删除成功！', 1);
        browserHistory.push('/admin/users/list');
      }
    },

  },

  subscriptions: {},
};
