import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function query(queryData) {
  const formData = new FormData();     // eslint-disable-line
  const date = typeof(queryData.date) == 'undefined'?'':queryData.date;
  const orderId = typeof(queryData.orderId) == 'undefined'?'':queryData.orderId;
  return request(`${HOST_URL}/order/query?date=${date}&orderId=${orderId}`);
}

export function fetch() {
  const mockDate = {
    ongoing: [
      {
        openid: 'ouyaXwq_r9Z0GXF3KUQjjMQzpqoA',
        orderId: '14977544366823643',
        address: '北京航空航天大学海淀校区洗衣房',
        machineName: '滚筒洗脱机',
        machineModel: 'SCL020',
        functionName: '强力洗',
        price: '4',
        type: '微信',
        createdTime: '2017-06-18 10:53:56',
        finishTime: null,
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
