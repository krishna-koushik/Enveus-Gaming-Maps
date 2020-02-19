// This will absolutely change, probably won't even need axios
import Axios from 'axios';

const SERVICE_BASE = 'http://localhost:3005';

class Service {
  static getUrl(path) {
    return `${SERVICE_BASE}/${path}`;
  }

  static async get(path) {
    return Axios.get(Service.getUrl(path));
  }

  // Could potentially become useful
  // async getWithParams(path, params) {
  //   return Axios.get(this.getUrl(path), {
  //     params,
  //   });
  // }

  static async post(path, query) {
    return Axios.post(Service.getUrl(path), query);
  }
}

export default Service;