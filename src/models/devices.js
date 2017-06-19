import * as deviceService from '../services/device';

export default {
  namespace: 'devices',
  state: {
    free: [],
    ongoing: [],
  },

  reducers: {
    querySuccess(state) {
      const result = deviceService.fetch();
      return { ...state, ...result };
    },

    save(state, { payload: { data } }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *fetch({ payload: { queryData } }, { call, put }) {
      const { data } = yield call(deviceService.query, queryData);
      yield put({ type: 'save', payload: { data } });
    },
    *fetchAll({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(deviceService.queryAll);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/admin/device/list') {
          dispatch({ type: 'querySuccess', payload: query });
        }
      });
    },
  },
};
