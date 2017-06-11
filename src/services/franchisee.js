import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetchAllFranchises() {
  return request(`${HOST_URL}/franchisee/all`);
}
