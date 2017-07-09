export const HOST_URL = 'http://wxgzhpaytest.maxtropy.com/corp';

export const INDEX_MANAGE_CARD_INFO = {
  cardTitle: '管理',
  indexModuleItems: [
    {
      id: 1,
      itemTitle: '营销管理',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497209107/manage1_hwlyze.png',
      url: '#',
    },
    {
      id: 2,
      itemTitle: '加盟商管理',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497209107/manage2_kgfqqg.png',
      url: '/admin/franchisee/list',
    },
    {
      id: 3,
      itemTitle: '洗衣点管理',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497209107/manage3_wfv05u.png',
      url: '/admin/stations/list',
    },
    {
      id: 4,
      itemTitle: '故障管理',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497209107/manage4_uu9su3.png',
      url: '#',
    },
    {
      id: 5,
      itemTitle: '人员管理',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497209107/manage5_gomozc.png',
      url: '/admin/users/list',
    },
  ],
};

export const INDEX_MACHINE_CARD_INFO = {
  cardTitle: '设备',
  indexModuleItems: [
    {
      id: 6,
      itemTitle: '设备分配',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497209107/machine1_plw8e4.png',
      url: '/admin/device/allocate/devices',
    },
    {
      id: 7,
      itemTitle: '设备启用',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497209107/machine2_auzmf3.png',
      url: '/admin/device/list',
    },
    {
      id: 8,
      itemTitle: '设备状态',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497209107/machine3_rdssly.png',
      url: '/admin/device/status',
    },
  ],
};

export const INDEX_OPERATION_CARD_INFO = {
  cardTitle: '运营',
  indexModuleItems: [
    {
      id: 9,
      itemTitle: '运营统计',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497155974/yunying1_ygncyy.png',
      url: '/admin/operation/statistics',
    },
    {
      id: 10,
      itemTitle: '交易查询',
      itemImg: 'http://res.cloudinary.com/xnchen/image/upload/v1497155974/yunying2_mwt2ly.png',
      url: '/admin/order/query',
    },
  ],
};
