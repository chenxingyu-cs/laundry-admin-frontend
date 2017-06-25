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
      // const data = yield call(stationService.fetch);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {},
};
