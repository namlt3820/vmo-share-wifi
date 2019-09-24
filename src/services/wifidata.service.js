import Base from './base.service';

export default class WifiData extends Base {
  constructor() {
    super('router/usedData');
  }

  getDataWifiByDate(params) {
    return this.get(params);
  }
}
