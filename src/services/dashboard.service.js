import Base from './base.service';

export default class DashboardManagerment extends Base {
  constructor() {
    super('mngt/data');
  }

  getAllData() {
    return this.get();
  }
}
