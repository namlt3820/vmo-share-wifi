import Base from './base.service';

export default class Router extends Base {
  constructor() {
    super('router');
  }

  getRouter(params) {
    return this.get(params);
  }

  addRouter(params) {
    return this.post(params);
  }

  updateRouter(id, params) {
    return this.patch(id, params);
  }

  deleteRouter(id) {
    return this.delete(id);
  }
}
