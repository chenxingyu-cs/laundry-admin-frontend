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
      const test = false;
      return { ...state, test };
    },
    disable(state) {
      const test = true;
      return { ...state, test };
    },
  },
  effects: {
    *fetch({ payload: { boxId } }, { call, put }) {
      const { data } = yield call(deviceService.query, boxId);
      yield put({ type: 'save', payload: { data } });
    },
    *fetchStatus({ payload: { boxId } }, { call, put }) {
      const { data } = yield call(deviceService.queryStatus, boxId);
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
    *update({ payload: { boxId, fee1, fee2, fee3, fee4 } }, { call, put }) {
      const { data } = yield call(deviceService.updateBox, boxId, fee1, fee2, fee3, fee4);
      if (!data.responseEntity || data.responseEntity === false) {
        Toast.fail('更新失败');
      } else {
        Toast.success('更新成功');
        yield put({ type: 'disable' });
        browserHistory.push('/admin/device/list');
      }
    },
    *bind({ payload: { boxId, testData, fee1, fee2, fee3, fee4 } }, { call, put }) {
      if (!(testData.deviceId && testData.qrcode && testData.model &&
        testData.type && fee1 && fee2 && fee3 && fee4)) {
        Toast.fail('请填写所有参数');
      } else {
        const { data } = yield call(deviceService.bindBox, boxId, testData, fee1, fee2, fee3, fee4);
        if (!data.responseEntity || data.responseEntity === false) {
          Toast.fail('绑定失败');
        } else {
          Toast.success('绑定成功');
          yield put({ type: 'disable' });
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
        const matchStatus = pathToRegexp('/admin/device/statusDetail/:deviceId').exec(pathname);
        if (matchDetail) {
          const boxId = matchDetail[1];
          dispatch({ type: 'fetch', payload: { boxId } });
        } else if (matchUnbind) {
          const boxId = matchUnbind[1];
          dispatch({ type: 'unbind', payload: { boxId } });
        } else if (matchStatus) {
          const boxId = matchStatus[1];
          dispatch({ type: 'fetchStatus', payload: { boxId } });
        }
      });
    },
  },
};
