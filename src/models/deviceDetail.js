import { browserHistory } from 'dva/router';
import { Toast } from 'antd-mobile';
import pathToRegexp from 'path-to-regexp';
import * as deviceService from '../services/device';

export default {
  namespace: 'deviceDetail',
  state: {
    boxInfo: {},
    test: true,
  },

  reducers: {
    save(state, { payload: { data } }) {
      const result = { boxInfo: data.responseEntity };
      return { ...state, ...result };
    },
    enable(state) {
      const { boxInfo } = state;
      let { test } = state;
      test = false;
      return { ...state, boxInfo, test };
    },
  },
  effects: {
    *fetch({ payload: { boxId } }, { call, put }) {
      const { data } = yield call(deviceService.query, boxId);
      yield put({ type: 'save', payload: { data } });
    },
    *test({ payload: { boxId, testData, fee1, fee2, fee3, fee4 } }, { call, put }) {
      if (!(testData.deviceId && testData.qrcode && testData.model &&
        testData.type && fee1 && fee2 && fee3 && fee4)) {
        Toast.fail('请填写所有参数');
      } else {
        const { data } = yield call(deviceService.testBox, boxId, testData, fee1, fee2, fee3, fee4);
        if (!data.responseEntity || data.responseEntity === false) {
          Toast.fail('测试失败');
        } else {
          Toast.success('测试成功');
          yield put({ type: 'enable' });
        }
      }
    },
    *bind({ payload: { boxId, testData, fee1, fee2, fee3, fee4 } }, { call }) {
      if (!(testData.deviceId && testData.qrcode && testData.model &&
        testData.type && fee1 && fee2 && fee3 && fee4)) {
        Toast.fail('请填写所有参数');
      } else {
        const { data } = yield call(deviceService.bindBox, boxId, testData, fee1, fee2, fee3, fee4);
        if (!data.responseEntity || data.responseEntity === false) {
          Toast.fail('绑定失败');
        } else {
          Toast.success('绑定成功');
          browserHistory.push('/admin/device/list');
        }
      }
    },
    *unbind({ payload: { boxId } }, { call }) {
      const { data } = yield call(deviceService.unbindBox, boxId);
      if (!data.responseEntity || data.responseEntity === false) {
        Toast.fail('解绑失败');
      } else {
        Toast.success('解绑成功');
        browserHistory.push('/admin/device/list');
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const matchDetail = pathToRegexp('/admin/device/detail/:deviceId').exec(pathname);
        const matchUnbind = pathToRegexp('/admin/device/unbind/:deviceId').exec(pathname);
        if (matchDetail) {
          const boxId = matchDetail[1];
          dispatch({ type: 'fetch', payload: { boxId } });
        } else if (matchUnbind) {
          const boxId = matchUnbind[1];
          dispatch({ type: 'unbind', payload: { boxId } });
        }
      });
    },
  },
};
