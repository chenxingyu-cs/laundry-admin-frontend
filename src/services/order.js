import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function query({ queryData }) {
  const formData = new FormData();     // eslint-disable-line
  formData.append('date', queryData.date);
  formData.append('orderId', queryData.orderId);
  return request(`${HOST_URL}/queryOrder`, {
    // headers,
    method: 'POST',
    body: formData,
  });
}

export function fetch() {
  const mockDate = {
    ongoing: [
      {
        openid: '8888',
        orderId: '14951819833507549',
        address: '北京',
        machineName: '速比坤洗衣机001',
        functionName: '标准洗',
        price: '0',
        createdTimestamp: '1495181983350',
        finishTimestamp: null,
        paid: false,
        finished: false,
      },
    ],
    finished: [
      {
        openid: '8888',
        orderId: '14951819833507511',
        address: '北京',
        machineName: '速比坤洗衣机001',
        functionName: '标准洗',
        price: '0',
        createdTimestamp: '1495181983350',
        finishTimestamp: null,
        paid: false,
        finished: false,
      },
      {
        openid: '8888',
        orderId: '14951819833507509',
        address: '北京',
        machineName: '速比坤洗衣机001',
        functionName: '标准洗',
        price: '0',
        createdTimestamp: '1495181983350',
        finishTimestamp: null,
        paid: false,
        finished: false,
      },
      {
        openid: '8888',
        orderId: '14951819833507541',
        address: '北京',
        machineName: '速比坤洗衣机001',
        functionName: '标准洗',
        price: '0',
        createdTimestamp: '1495181983350',
        finishTimestamp: null,
        paid: false,
        finished: false,
      },
      {
        openid: '8888',
        orderId: '14951819833507547',
        address: '北京',
        machineName: '速比坤洗衣机001',
        functionName: '标准洗',
        price: '0',
        createdTimestamp: '1495181983350',
        finishTimestamp: null,
        paid: false,
        finished: false,
      },
    ],
  };
  return mockDate;
}
