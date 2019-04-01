import BaseController, { returnBody } from './baseController'

class Login extends BaseController {
  * index() {
    const { ctx } = this;
    // console.log('9999999', this.service.user.login({name: 'admin'}));
    console.log('jjjjjjjjjjjjjjjjjj22', this.service.user.login)
    ctx.body = yield this.service.user.login({ user_name: 'admin' });
    // console.log(',seee', ctx.body);
    ctx.status = 200;
    // reutrn result;
  }
  
  * create() {
    const { ctx } = this;
    // ctx.rotateCsrfSecret();
    let data = yield this.findUser();
    ctx.body = {...returnBody, data};
    ctx.status = 200;
  }
  
  async show() {
    await this.ctx.render('pages/login');
  }

  
  findUser(){
    const {ctx} = this;
    let result = this.service.user.login({user_name: 'admin'});
    return result;
  }
}

module.exports = Login