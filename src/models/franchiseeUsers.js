import * as franchiseeUserService from '../services/franchiseeUser';

export default {
  namespace: 'franchiseeUsers',
  state: {
    operators: [],
    administrators: [],
    observers: [],
  },

  reducers: {
    save(state, { payload: { data } }) {
      return { ...state, ...data };
    },
  },

  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(franchiseeUserService.fetch);
      console.log(data);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {},
};
