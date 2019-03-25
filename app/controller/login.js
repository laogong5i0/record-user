import BaseController,{returnBody} from './baseController'

class Login extends BaseController {
  async show(){
    await this.ctx.render('container');
  }
  async create() {
    const { ctx } = this;
    ctx.rotateCsrfSecret();
    ctx.body=returnBody;
    ctx.status = 200;
  }

}

module.exports = Login