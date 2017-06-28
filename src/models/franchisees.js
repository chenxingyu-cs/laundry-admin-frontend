import { browserHistory } from 'dva/router';
import { Toast } from 'antd-mobile';
import * as franchiseeService from '../services/franchisee';

export default {
  namespace: 'franchisees',
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: { data } }) {
      const result = { list: data };
      return { ...state, ...result };
    },

    filter(state, { payload: { keyword } }) {
      const filteredList = state.list.filter(item => item.name.includes(keyword));
      const result = { list: filteredList };
      return { ...state, ...result };
    },
  },

  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(franchiseeService.fetchAllFranchises);
      yield put({ type: 'save', payload: { data } });
    },

    *create({ payload: { name, phone } }, { call }) {
      const { data } = yield call(franchiseeService.createFranchisee, name, phone);
      if (data.status && data.status === 'OK') {
        Toast.success('新建成功！', 1);
        browserHistory.push('/admin/franchisee/list');
      } else {
        Toast.fail('新建失败，请重试！', 1);
      }
      // yield put({ type: 'reload' });
    },

    *edit({ payload: { id, name, phone } }, { call }) {
      const { data } = yield call(franchiseeService.edit, id, name, phone);
      if (data.status && data.status === 'OK') {
        Toast.success('编辑成功！', 1);
        browserHistory.push('/admin/franchisee/list');
      } else {
        Toast.fail('编辑失败，请重试！', 1);
      }
    },

    *remove({ payload: { id } }, { call }) {
      const { data } = yield call(franchiseeService.remove, id);
      if (data.status && data.status === 'OK') {
        Toast.success('删除成功！', 1);
        browserHistory.push('/admin/franchisee/list');
      } else {
        Toast.fail('删除失败，请重试！', 1);
      }
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/admin/franchisee/list') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
