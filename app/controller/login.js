// import BaseController, { returnBody } from './baseController'
const BaseController = require('./baseController');
const {returnBody} =require('../utils/static');

class Login extends BaseController {
  * index() {
    const { ctx } = this;
    // const res = this.params.res;
    // console.log('jjjjjjjjjjjjjjjjjj22', ctx.req)
    // console.log('jjjjjjjjjjjjjjjjjj22', ctx.params)
    let data = yield this.findUser();
    ctx.body = {...returnBody, data};
    ctx.status = 200;
  }
  
  * create() {
    const { ctx } = this;
    // const res = this.params.res;
    // console.log('jjjjjjjjjjjjjjjjjj223333', ctx.request.body);
    ctx.rotateCsrfSecret();
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