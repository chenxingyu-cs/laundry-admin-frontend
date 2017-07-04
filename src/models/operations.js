import * as operationService from '../services/operation';

export default {
  namespace: 'operations',
  state: {
    franchisees: [],
    stations: [],
    sum: 0,
    list: [],
  },

  reducers: {
    saveFranchisees(state, { payload: { data } }) {
      const result = { franchisees: data };
      return { ...state, ...result };
    },
    saveStores(state, { payload: { data } }) {
      const result = { stations: data };
      return { ...state, ...result };
    },
    saveStat(state, { payload: { data } }) {
      const result = { sum: data.sum, list: data.list };
      return { ...state, ...result };
    },
  },
  effects: {
    *fetch({ payload: { stat, mode } }, { call, put }) {
      const date = stat.date;
      const franchiseeId = stat.franchiseeId ? `&franchiseeId=${stat.franchiseeId}` : '';
      const stationId = stat.stationId ? `&stationId=${stat.stationId}` : '';
      const boxId = stat.boxId ? `&boxId=${stat.boxId}` : '';

      const { data } = yield call(operationService.query, date, mode,
        franchiseeId, stationId, boxId);
      yield put({ type: 'saveStat', payload: { data } });
    },
    *fetchFranchisees({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(operationService.queryFranchisees);
      yield put({ type: 'saveFranchisees', payload: { data } });
    },
    *fetchStores({ payload: { val } }, { call, put }) {
      const { data } = yield call(operationService.queryStores, val);
      yield put({ type: 'saveStores', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'fetchFranchisees', payload: 1 });
    },
  },
};
