import BaseController,{returnBody} from '../baseController'

export const recipe_tempalte = {
  type:0,
  name:'',

}

export const result = {
  total_num: 0,
  current_page: 0,
  list:[]
}

class RecipeTemplate extends BaseController {
  async index(){
    const { ctx } = this;
    ctx.body = returnBody;
    ctx.status = 200;
  }

  async create() {
    const { ctx } = this;
    // ctx.rotateCsrfSecret();
    const data = {data: [{name: 'patch', old:24, address: 'gsxt'}]}
    ctx.body={...returnBody,...data};//Object.assign(returnBody, data);//{...returnBody,data};
    ctx.status = 200;
  }

}

module.exports = RecipeTemplate;