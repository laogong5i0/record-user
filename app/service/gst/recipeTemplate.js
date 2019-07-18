const Service = require('beidou').Service;

const GSTDBName = 'gst_db';
// ${data.recipe_id}, 
//         ${data.recipe_name},
//         ${data.item_list},
//         ${data.min_dosage},
//         ${data.product_num},
//         ${data.standard},
//         ${data.recipe_type},
//         ${data.remark}

class RecipeTemplateService extends Service {
  *addGstRecipes(list){
    // list = this.ctx.helper.objtoarr(list);
    console.log('=------------------------------>>>>>', list);
    let _sql =`insert ignore into recipe_template (
      recipe_id, 
      recipe_name, 
      item_list, 
      min_dosage,
      product_num,
      standard,
      recipe_type,
      remark
    ) values (
      :recipe_id, 
      :recipe_name,
      :item_list,
      :min_dosage,
      :product_num,
      :standard,
      :recipe_type,
      :remark
    )`
    const gst_db = this.app.mysql.get(GSTDBName);
    try{
      const rows = yield gst_db.query(_sql, list, (err, result, fields)=>{
        console.log('---33333333333333333331111111');
      });
    }catch(err){
      console.log('===================------', err);
    }
    return rows;
  }

  * addGstRecipe(request) {
    let data = { ...request };
    // let data = {
    //   recipe_id: 2,
    //   recipe_name: 'ceshi2',
    //   item_list: '{"item":"2", "size":"22"}',
    //   min_dosage: 2,
    //   product_num: 2,
    //   standard: 2,
    //   recipe_type:1,
    //   remark: 'ceshi xie ding fang 2'
    // }
    const gst_db = this.app.mysql.get(GSTDBName);
    const _sql = `
      insert ignore into recipe_template (
        recipe_id, 
        recipe_name, 
        item_list, 
        min_dosage,
        product_num,
        standard,
        recipe_type,
        remark
      ) values (
        :recipe_id, 
        :recipe_name,
        :item_list,
        :min_dosage,
        :product_num,
        :standard,
        :recipe_type,
        :remark
      );
    `;

    const rows = yield gst_db.query(_sql, data);
    return rows;
  }
}

module.exports = RecipeTemplateService;

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

// INSERT INTO clients
//     (client_id, client_name, client_type)
//     SELECT supplier_id, supplier_name, 'advertising'
//     FROM suppliers
//     WHERE not exists (select * from clients
//     where clients.client_id = suppliers.supplier_id);