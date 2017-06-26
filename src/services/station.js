import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetch() {
  return request(`${HOST_URL}/station/all`);
}

export function createFranchisee(name, phone, desc = '') {
  const formData = new FormData();     // eslint-disable-line
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('desc', desc);
  return request(`${HOST_URL}/franchisee/add`, {
    method: 'POST',
    body: formData,
  });
}

export function edit(id, name, phone, desc = '') {
  const formData = new FormData();     // eslint-disable-line
  formData.append('id', id);
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('desc', desc);
  return request(`${HOST_URL}/franchisee/update`, {
    method: 'POST',
    body: formData,
  });
}

export function remove(id) {
  return request(`${HOST_URL}/franchisee/delete?id=${id}`);
}