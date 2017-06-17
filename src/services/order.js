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
        price: '2',
        createdTimestamp: '2016-10-01 06:05:00',
        finishTimestamp: null,
        type: '微信',
        paid: '支付成功',
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
        price: '5',
        createdTimestamp: '2016-10-01 06:05:00',
        finishTimestamp: null,
        type: '微信',
        paid: '支付失败',
        finished: false,
      },
      {
        openid: '8888',
        orderId: '14951819833507509',
        address: '北京',
        machineName: '速比坤洗衣机001',
        functionName: '标准洗',
        price: '1',
        createdTimestamp: '2016-10-01 06:05:00',
        finishTimestamp: null,
        type: '微信',
        paid: '支付失败',
        finished: false,
      },
      {
        openid: '8888',
        orderId: '14951819833507541',
        address: '北京',
        machineName: '速比坤洗衣机001',
        functionName: '标准洗',
        price: '3',
        createdTimestamp: '2016-10-01 06:05:00',
        finishTimestamp: null,
        type: '微信',
        paid: '支付成功',
        finished: false,
      },
      {
        openid: '8888',
        orderId: '14951819833507547',
        address: '北京',
        machineName: '速比坤洗衣机001',
        functionName: '标准洗',
        price: '2',
        createdTimestamp: '2016-10-01 06:05:00',
        finishTimestamp: null,
        type: '微信',
        paid: '支付失败',
        finished: false,
      },
    ],
  };
  return mockDate;
}
