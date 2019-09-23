import Base from './base.service';

export default class UserData extends Base {
  constructor() {
    super('trafficData');
  }

  getDataByDate(params) {
    return this.get(params);
  }
}
