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
      // const { data } = yield call(adminUserService.fetch);
      const data = yield call(adminUserService.fetch);
      yield put({ type: 'save', payload: { data } });
    },

  },

  subscriptions: {},
};
