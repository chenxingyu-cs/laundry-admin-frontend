import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function query(boxId) {
  return request(`${HOST_URL}/device/start?boxId=${boxId}`);
}

export function queryStatus(boxId) {
  return request(`${HOST_URL}/device?boxId=${boxId}`);
}

export function queryAll() {
  return request(`${HOST_URL}/device/all`);
}

export function queryBindAll() {
  return request(`${HOST_URL}/device/bind/all`);
}

export function testBox(boxId, testData, fee1, fee2, fee3, fee4) {
  const formData = new FormData();     // eslint-disable-line
  formData.append('boxId', boxId);
  formData.append('deviceId', testData.deviceId);
  formData.append('qrcode', testData.qrcode);
  formData.append('modelName', testData.model);
  formData.append('type', testData.type);
  formData.append('fee1', fee1);
  formData.append('fee2', fee2);
  formData.append('fee3', fee3);
  formData.append('fee4', fee4);
  return request(`${HOST_URL}/device/test`, {
    method: 'POST',
    body: formData,
  });
}

export function updateBox(boxId, fee1, fee2, fee3, fee4) {
  const formData = new FormData();     // eslint-disable-line
  formData.append('boxId', boxId);
  formData.append('fee1', fee1);
  formData.append('fee2', fee2);
  formData.append('fee3', fee3);
  formData.append('fee4', fee4);
  return request(`${HOST_URL}/device/update`, {
    method: 'POST',
    body: formData,
  });
}

export function bindBox(boxId, testData, fee1, fee2, fee3, fee4) {
  const formData = new FormData();     // eslint-disable-line
  formData.append('boxId', boxId);
  formData.append('deviceId', testData.deviceId);
  formData.append('qrcode', testData.qrcode);
  formData.append('modelName', testData.model);
  formData.append('type', testData.type);
  formData.append('fee1', fee1);
  formData.append('fee2', fee2);
  formData.append('fee3', fee3);
  formData.append('fee4', fee4);
  return request(`${HOST_URL}/device/bind`, {
    method: 'POST',
    body: formData,
  });
}

export function unbindBox(boxId) {
  return request(`${HOST_URL}/device/unbind?boxId=${boxId}`);
}

export function allocateDevices(values) {
  return request(`${HOST_URL}/device/assign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
}

export function fetchUnallocated() {
  return request(`${HOST_URL}/device/unassigned/all`);
}

export function createOperationLog(values) {
  const { errorDate, repairDate, issue, method, boxId } = values;
  return request(`${HOST_URL}/device/operationLog/add?boxId=${boxId}&errorDate=${errorDate}&repairDate=${repairDate}&issue=${issue}&method=${method}`);
}
