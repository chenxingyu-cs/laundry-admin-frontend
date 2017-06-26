import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function initWXSDK() {
  request(`${HOST_URL}/signature`, {
    method: 'POST',
  })
  .then((res) => {
    if (res.data) {
      return res.data;
    } else {
      throw new Error('get signature failed');
    }
  })
  .then(({ appId, timestamp, nonceStr, signature }) => {
    wx.config({ // eslint-disable-line
      debug: false,
      appId,
      jsApiList: ['scanQRCode'],
      timestamp,
      nonceStr,
      signature,
    });
    wx.error((err) => { // eslint-disable-line
      alert(JSON.stringify(err)); // eslint-disable-line
    });
  })
  .catch((err) => {
    console.warn(`wx sdk init failed: ${err}`);
  });
}
