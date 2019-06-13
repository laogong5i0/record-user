const Controller = require('beidou').Controller;

class BaseController extends Controller {
  async index() {
    this.message('Index funcion must be rewritten, please rewrite Index function.');
  }
  async create() {
    this.message('Create funcion must be rewritten, please rewrite Create function.');
  }
  async show() {
    this.message('Show funcion must be rewritten, please rewrite Show function.');
  }
  async edit() {
    this.message('Edit funcion must be rewritten, please rewrite Edit function.');
  }
  async update() {
    this.message('Update funcion must be rewritten, please rewrite Update function.');
  }
  async destroy() {
    this.message('Destroy funcion must be rewritten, please rewrite Destroy function.');
  }
  message(mes) {
    this.ctx.body = mes;
    this.ctx.status = 200;
  }
}
module.exports = BaseController;
// }
// module.exports = BaseController;