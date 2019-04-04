// import BaseController,{returnBody} from '../baseController'
const BaseController = require('../baseController');
const { returnBody } = require('../../utils/static');
const recipe_tempalte = {
  type: 0,
  name: '',
}

const result = {
  total_num: 0,
  current_page: 0,
  list: []
}

const gst_url = 'http://lb-cgi.gstyun.cn/cgi-bin/pharmacyinfo/queryrecipe';
const listRule = {
  page_no: { type: "string", },
  page_size: { type: "string", required: true },
  max_type: { type: "string", required: false, default: "1" }
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

  * addGstRecipe() {

  }

  * findGstRecipes() {
    const { ctx } = this;
    try {
      ctx.validate(listRule, ctx.query);
      const result = yield ctx.curl(`${gst_url}`, {
        data: { method: 4, max_type: 1, ...ctx.query },
        dataType: 'json',
      });
      ctx.body = result.data;
      ctx.status = 200;
    } catch (err) {
      let message = '';
      err.errors.forEach((item, index) => {
        message += `${item.field} ${item.message}. `;
      })
      const result = { ...returnBody, message }
      ctx.body = result;
      ctx.logger.warn(result);
      ctx.status = 200;
    }
  }
}

module.exports = RecipeTemplate;


// http://lb-cgi.gstyun.cn/cgi-bin/pharmacyinfo/queryrecipe
// 请求类型 get
// clinic_id	  门店编号	string	his下载需要填
// end_time	    结束时间	string	
// max_type	    类别	    string	1：协定方 2：医保套餐
// method	      查询方式	string	1指定recipe_id,查询明细 2：指定名称跟协定方类型查询配方列表 3：根据更新时间查询列表（含项目明细）。4：拉取所有列表
// page_no	    起始页	  number	
// page_size	  分页大小	number	
// recipe_id	  配方id    string	
// recipe_name	配方名称	string	
// recipe_type	配方类型	string	1, //膏方 2, //丸剂 3, //散剂 4, //灌肠方 5, //足浴方 6, //雾化液 7, //汤方 8, //茶方 9, //酒方 10, //面膜
// start_time	  开始时间	string	

// 返回值
// current_page	    当前页	number	
// data	            配方	array<object>	
//     item_list	    查询列表时，没有该项	array<object>	
//         deco_type	煎法	string	1, //先煎 2, //后下 3, // 烊化 4, //久煎 5, //冲服 6, //焗 7, //打 8, //另煎 9, //包煎 10,//打碎后煎
//         is_show	  是否展示	string	
//         item_code	项目编码	string	
//         item_name	项目名称	string	
//         item_num	项目数量	string	
//         pharma_units	药房销售单位/计价单位	string	
//         recipe_id	配方id	string	
//         standard	规格	string	
//     min_dosage	  起做剂数	string	
//     product_num	  成品数	string	
//     recipe_id	    配方id	string	
//     recipe_name	  配方名称	string	
//     recipe_type	  协定方类型	string	1, //膏方 2, //丸剂 3, //散剂 4, //灌肠方 5, //足浴方 6, //雾化液 7, //汤方 8, //茶方 9, //酒方 10, //面膜
//     remark	      备注	string	
//     standard	    包装量	string	
// list_num	        当前记录数	number	
// message          错误消息	string	
// page_size        分页大小	number	
// status	          状态值 0 正常	string	
// total_num        总记录数	number	
// total_page	      总页数	number	