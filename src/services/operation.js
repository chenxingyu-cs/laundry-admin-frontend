import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function query(date, mode, franchiseeId, stationId, boxId) {
  return request(`${HOST_URL}/statistics?date=${date}&mode=${mode}${franchiseeId}${stationId}${boxId}`);
}

export function queryFranchisees() {
  return request(`${HOST_URL}/franchisee/all`);
}

export function queryStores(id) {
  return request(`${HOST_URL}/station/franchisee?id=${id}`);
}
