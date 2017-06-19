import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function query(queryData) {
  return request(`${HOST_URL}/device/query?deviceId=${queryData.deviceId}`);
}

export function fetch() {
  const mockDate = {
    free: [
      {
        boxId: '101040000041802B',
        boxVersion: null,
        deviceModel: 'SWNBX2',
        deviceId: 1,
        deviceName: '波轮洗衣机',
        stationName: '北京航空航天大学海淀校区洗衣房',
        stationAddress: '北京',
        paidFunction: '微信',
        currentWeekAvgWorkTime: 0,
        currentWeekIncome: 0,
        functions: [
          {
            id: 1,
            name: '标准洗',
            price: '0.01',
            time: 30,
            description: '洗衣前自动清洁内筒, 所需时间30分钟 0.01元',
          },
          {
            id: 7,
            name: '加强洗',
            price: '4',
            time: 20,
            description: '滚筒混合洗, 所需时间20分钟 4元',
          },
        ],
        status: '空闲',
        operationLogs: [],
      },
      {
        boxId: '101040000041802F',
        boxVersion: null,
        deviceModel: 'STEX77B',
        deviceId: 5,
        deviceName: '滚筒洗衣机(一体机上半部分)',
        stationName: '北京航空航天大学海淀校区洗衣房',
        stationAddress: '北京',
        paidFunction: '微信',
        currentWeekAvgWorkTime: 0,
        currentWeekIncome: 0,
        functions: [
          {
            id: 5,
            name: '标准烘干30分钟',
            price: '4',
            time: 20,
            description: '适用于涤纶纯棉衣物烘干, 4元',
          },
        ],
        status: '空闲',
        operationLogs: [],
      },
      {
        boxId: '101040000041802G',
        boxVersion: null,
        deviceModel: 'LES17',
        deviceId: 6,
        deviceName: '烘干机',
        stationName: '北京航空航天大学海淀校区洗衣房',
        stationAddress: '北京',
        paidFunction: '微信',
        currentWeekAvgWorkTime: 0,
        currentWeekIncome: 0,
        functions: [
          {
            id: 6,
            name: '标准烘干40分钟',
            price: '4',
            time: 30,
            description: '适用于涤纶纯棉衣物烘干, 4元',
          },
        ],
        status: '空闲',
        operationLogs: [],
      },
    ],
    ongoing: [
      {
        boxId: '101040000041802D',
        boxVersion: null,
        deviceModel: 'SCL020',
        deviceId: 3,
        deviceName: '滚筒洗脱机',
        stationName: '北京航空航天大学海淀校区洗衣房',
        stationAddress: '北京',
        paidFunction: '微信',
        currentWeekAvgWorkTime: 0,
        currentWeekIncome: 0,
        functions: [
          {
            id: 3,
            name: '标准洗',
            price: '5',
            time: 30,
            description: '洗衣前自动清洁内筒, 所需时间30分钟 5元',
          },
          {
            id: 9,
            name: '加强洗',
            price: '4',
            time: 20,
            description: '滚筒混合洗, 所需时间20分钟 4元',
          },
          {
            id: 10,
            name: '快洗',
            price: '12',
            time: 40,
            description: '动力轻柔, 所需时间40分钟 12元',
          },
        ],
        status: '使用中',
        operationLogs: [],
      },
    ],
    offline: [
      {
        boxId: '101040000041802E',
        boxVersion: null,
        deviceModel: 'SDEX07',
        deviceId: 4,
        deviceName: '烘干机',
        stationName: '北京航空航天大学海淀校区洗衣房',
        stationAddress: '北京',
        paidFunction: '微信',
        currentWeekAvgWorkTime: 0,
        currentWeekIncome: 0,
        functions: [
          {
            id: 4,
            name: '标准烘干10分钟',
            price: '4',
            time: 10,
            description: '适用于涤纶纯棉衣物烘干, 4元',
          },
        ],
        status: '掉线',
        operationLogs: [],
      },
    ],
    broken: [
      {
        boxId: '101040000041802C',
        boxVersion: null,
        deviceModel: 'SFNBXA',
        deviceId: 2,
        deviceName: '滚筒洗衣机',
        stationName: '北京航空航天大学海淀校区洗衣房',
        stationAddress: '北京',
        paidFunction: '微信',
        currentWeekAvgWorkTime: 0,
        currentWeekIncome: 0,
        functions: [
          {
            id: 2,
            name: '轻柔洗',
            price: '6',
            time: 10,
            description: '洗衣后脱水处理, 所需时间10分钟 6元',
          },
          {
            id: 8,
            name: '快洗',
            price: '12',
            time: 40,
            description: '动力轻柔, 所需时间40分钟 12元',
          },
        ],
        status: '故障',
        operationLogs: [],
      },
    ],
  };
  return mockDate;
}
