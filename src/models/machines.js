import * as machineService from '../services/machine';

export default {
  namespace: 'machines',
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
      const { data } = yield call(machineService.fetch);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {},
};
