import pathToRegexp from 'path-to-regexp';
import * as deviceService from '../services/device';

export default {
  namespace: 'deviceDetail',
  state: {
    responseEntity: {},
  },

  reducers: {
    save(state, { payload: { data } }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *fetch({ payload: { boxId } }, { call, put }) {
      const { data } = yield call(deviceService.query, boxId);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/admin/device/detail/:deviceId').exec(pathname);
        if (match) {
          const boxId = match[1];
          dispatch({ type: 'fetch', payload: { boxId } });
        }
      });
    },
  },
};
