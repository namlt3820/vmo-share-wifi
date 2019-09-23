import Base from './base.service';

export default class WifiData extends Base {
  constructor() {
    super('data/usedData');
  }

  getDataByDate(params) {
    return this.get(params);
  }
}
