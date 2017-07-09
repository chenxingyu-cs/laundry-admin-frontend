import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetch() {
  return request(`${HOST_URL}/station/all`);
}

export function create(values) {
  return request(`${HOST_URL}/station/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
}

export function edit(id, values) {
  return request(`${HOST_URL}/station/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
}

export function remove(id) {
  return request(`${HOST_URL}/station/${id}`, {
    method: 'DELETE',
  });
}
