import BaseController,{returnBody} from './baseController'

class Login extends BaseController {
  async index(){
    this.create()
  }
  async create() {
    const { ctx } = this;
    ctx.rotateCsrfSecret();
    ctx.body=returnBody;
    ctx.status = 200;
  }
}

module.exports = Login