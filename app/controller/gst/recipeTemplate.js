// import BaseController,{returnBody} from '../baseController'
const BaseController = require('../baseController');
const {returnBody} =require('../../utils/static');
const recipe_tempalte = {
  type:0,
  name:'',

}

const result = {
  total_num: 0,
  current_page: 0,
  list:[]
}

class RecipeTemplate extends BaseController {
  // async index(){
  //   const { ctx } = this;
  //   ctx.body = returnBody;
  //   ctx.status = 200;
  // }

  // async create() {
  //   const { ctx } = this;
  // ctx.request.body
  //   // ctx.rotateCsrfSecret();
  //   const data = {data: [{name: 'patch', old:24, address: 'gsxt'}]}
  //   ctx.body={...returnBody,...data};//Object.assign(returnBody, data);//{...returnBody,data};
  //   ctx.status = 200;
  // }

  * findGstRecipe(){
    const {ctx} = this;
    // ctx.query
    const url = 'http://lb-cgi.gstyun.cn/cgi-bin/pharmacyinfo/queryrecipe';
    const result = yield ctx.curl(`${url}?${ctx.querystring}`, {
      dataType: 'json',
    });
    ctx.body = result.data;
    ctx.status = 200;
  }
}

module.exports = RecipeTemplate;