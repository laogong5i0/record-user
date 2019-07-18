Create Database If Not Exists gst_db Character Set UTF8;
mysql -uroot -p12345678
use gst_db;

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
  1, 
  '测试1',
  '{"item":"", "size":"2"}',
  2,
  3,
  4,
  1,
  null
);
