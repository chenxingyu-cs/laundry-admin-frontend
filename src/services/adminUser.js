import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetch() {
  return request(`${HOST_URL}/admin/all`);
  // return testUsers;
}

export function create(name, mobile, franchiseeId, level) {
  const formData = new FormData();     // eslint-disable-line
  formData.append('name', name);
  formData.append('mobile', mobile);
  formData.append('franchisee_id', franchiseeId);
  formData.append('level', level);
  return request(`${HOST_URL}/admin/add`, {
    method: 'POST',
    body: formData,
  });
}

export function edit(id, name, mobile, franchiseeId, level) {
  const formData = new FormData();     // eslint-disable-line
  formData.append('name', name);
  formData.append('mobile', mobile);
  formData.append('franchisee_id', franchiseeId);
  formData.append('level', level);
  return request(`${HOST_URL}/admin/${id}`, {
    method: 'PUT',
    body: formData,
  });
}

export function remove(id) {
  return request(`${HOST_URL}/admin/${id}`, {
    method: 'DELETE',
  });
}
