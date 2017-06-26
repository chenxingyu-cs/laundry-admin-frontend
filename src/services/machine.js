import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetch() {
  return request(`${HOST_URL}/station/machine`);
}
