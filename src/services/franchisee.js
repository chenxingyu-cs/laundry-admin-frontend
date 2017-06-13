import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetchAllFranchises() {
  return request(`${HOST_URL}/franchisee/all`);
}

export function createFranchisee(name, phone, desc = '') {
  const formData = new FormData();     // eslint-disable-line
  formData.append('name', name);
  formData.append('phone', phone.replace(/ /g, ''));
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
  formData.append('phone', phone.replace(/ /g, ''));
  formData.append('desc', desc);
  console.log(formData);
  // return request(`${HOST_URL}/franchisee/add`, {
  //   method: 'POST',
  //   body: formData,
  // });
}
