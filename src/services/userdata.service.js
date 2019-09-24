import Base from './base.service';

export default class UserData extends Base {
  constructor() {
    super('trafficData');
  }

  getDataUserByDate(params) {
    return this.get(params);
  }
}
