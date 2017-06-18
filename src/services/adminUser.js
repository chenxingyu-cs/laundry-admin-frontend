import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetch() {
  // return request(`${HOST_URL}/franchisee/all`);
  return testUsers;
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

const testUsers = [
  {
    id: 1,
    name: 'User1',
    character: '管理员',
    phone: '3245343243',
  },
  {
    id: 2,
    name: 'User2',
    character: '管理员',
    phone: '3245343243',
  },
  {
    id: 3,
    name: 'User3',
    character: '管理员',
    phone: '3245343243',
  },
  {
    id: 4,
    name: 'User4',
    character: '管理员',
    phone: '3245343243',
  },
  {
    id: 5,
    name: 'User5',
    character: '管理员',
    phone: '3245343243',
  },
  {
    id: 6,
    name: 'User6',
    character: '管理员',
    phone: '3245343243',
  },
];
