import * as orderService from '../services/order';

export default {
  namespace: 'orders',
  state: {
    ongoing: [],
    finished: [],
  },

  reducers: {
    querySuccess(state) {
      const result = orderService.fetch();
      return { ...state, ...result };
    },

    save(state, { payload: { data } }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *fetch({ payload: { queryData } }, { call, put }) {
      const { data } = yield call(orderService.query, queryData);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {},
};
