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
  },

  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(franchiseeService.fetchAllFranchises);
      yield put({ type: 'save', payload: { data } });
    },

    *create({ payload: { name, phone } }, { call }) {
      yield call(franchiseeService.createFranchisee, name, phone);
      // yield put({ type: 'reload' });
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
