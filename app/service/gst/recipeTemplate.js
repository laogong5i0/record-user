const Service = require('beidou').Service;


class UserService extends Service {
  * addGstRecipe(request) {
    let condition = { ...request };
    const gst_db = app.mysql.get('gst_db');
    const _sql = `
      create table if not exists recipe_template (
        recipe_id int primary key comment '协定方ID',
        recipe_name varchar(250) not null comment '配方名称',
        item_list json not null comment '协定方详情',
        min_dosage int not null comment '起做剂数',
        product_num int not null comment '成品数',
        standard int not null comment '包装量',
        recipe_type int not null default 1 comment '协定方类型	int	1, //膏方 2, //丸剂 3, //散剂 4, //灌肠方 5, //足浴方 6, //雾化液 7, //汤方 8, //茶方 9, //酒方 10, //面膜',
        remark varchar(500) comment '备注'
      ) comment='协定方摸';
      insert into recipe_template (
        recipe_id, 
        recipe_name, 
        item_list, 
        min_dosage,
        product_num,
        standard,
        recipe_type,
        remark
      ) values (
        1, 
        '测试1',
        '{"item":"", "size":"2"}',
        2,
        3,
        4,
        1,
        null
      ) 
      where not exists 
      (select * from recipe_template where recipe_template.recipe_id = 1);
    `;

    // let record = yield client1.get("users_test", condition);
    // const rows = yield client1.query('select * from users_test where user_name=:name', {name: condition.name});
    return record;
  }
}

module.exports = UserService;

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