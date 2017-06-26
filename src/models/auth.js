import * as authService from '../services/auth';

export default {
  namespace: 'auth',
  state: {
    authorityLevel: 500,
  },
  reducers: {
    save(state, { payload: { authorityLevel } }) {
      return { ...state, authorityLevel };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(authService.fetch);
      const authorityLevel = data.responseEntity;
      yield put({ type: 'save', payload: { authorityLevel } });
    },

  },
  subscriptions: {},
};
