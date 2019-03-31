import BaseController, { returnBody } from './baseController'

class Login extends BaseController {
  async index() {
    const { ctx } = this;
    console.log('9999999', this.service.user.login({name: 'admin'}));
    ctx.body = await this.service.user.login({name: 'admin'});

    ctx.status = 200;
  }
  async show() {

    await this.ctx.render('pages/login');
  }
  async create() {


    const { ctx } = this;
    ctx.rotateCsrfSecret();
    const data = { data: [{ name: 'patch', old: 24, address: 'gsxt' }] }
    ctx.body = { ...returnBody, ...data };//Object.assign(returnBody, data);//{...returnBody,data};
    ctx.status = 200;
  }

}

module.exports = Login