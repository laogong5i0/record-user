-- 解决 vscode mysql组件连接数据库的问题 
-- Client does not support authentication protocol requested by server; consider upgrading MySQL client
-- 其中password需要改成你自己的密码，大概原因是MySQL8.0的加密方式改变了，但是比较老版本的navicate没有来得及支持，因此需要将mysql设置为支持传统的那种密码加密，如果用比较低版本的MySQL，比如MySQL57应该就不会出现这种问题。
-- 最后再输入下面一句进行刷新
alter user 'root'@'localhost' identified with mysql_native_password by '12345678';
FLUSH PRIVILEGES;



-- Create a new table called 'users' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.users', 'U') IS NOT NULL
DROP TABLE SchemaName.users
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.users
(
  usersId INT NOT NULL PRIMARY KEY, -- primary key column
  nameNAME [NVARCHAR](50) NOT NULL,
  pass [NVARCHAR](50) NOT NULL
  -- specify more columns here
);
--GO

-- 创建 test 表
create database test;
use mysql;
use test;
show tables;
-- 查看表结构
DESC users;
-- 创建用户表
create table users_test 
(
  user_id int auto_increment primary key,
  user_name varchar(50) not null,
  password varchar(50) not null,
  address varchar(120) default null
);

-- 删除表
drop table table_name;
alter database test users_test;
alter table users add user_id int auto_increment primary key;
alter table users add name varchar(50) not null;
-- alter table table1 add id int auto_increment primary key 自增字段
alter table users add (
    password varchar(50) not null, 
    address varchar(120) default NULL
  );

-- 插入记录
insert into users_test (user_name, password) values ('admin', 'admin');


-- 1 创建表的时候写注释
create table test1
(
field_name int comment '字段的注释'
)comment='表的注释';

-- 修改表名
ALTER TABLE user10 RENAME TO user11;

-- 2 修改表的注释
alter table test1 comment '修改后的表的注释';

-- 3 修改字段的注释
alter table test1 modify column field_name int comment '修改后的字段注释';
--注意：字段名和字段类型照写就行

-- 4 查看表注释的方法
--在生成的SQL语句中看
show create table test1;
--在元数据的表里面看
use information_schema;
select * from TABLES where TABLE_SCHEMA='my_db' and TABLE_NAME='test1' \G

-- 5 查看字段注释的方法
--show
show full columns from test1;
-- 查看增表的信息；
show full fields from users;
--在元数据的表里面看
select * from COLUMNS where TABLE_SCHEMA='my_db' and TABLE_NAME='test1' \G

-- 总共能存10位数字，末尾2位是小数，字段最大值99999999.99（小数点不算在长度内）
decimal(10,1)

-- change 修改表字段名
alter table users change name user_name varchar(50) not null comment '用户名';
-- modify;
alter table users modify column user_id bigint(30) not null comment '用户ID，程序自动生成，由时间戳+电话号码后4位组成'; 



/* 
`id` int unsigned not null auto_increment primary key,//序号
`commodity_name` varchar(50) not null,//商品名称
`formatI` varchar(50) not null,//商品规格
`price` double not null,//商品价格
`quantity` double not null,//商品数量
`period` int(20),//商品周期
`purchase_sel` varchar(6),//购/销
`remark` varchar(100),//备注
`write_time` timestamp default current_timestamp//日期-时间 */

create database if not exsits users_test;
rename table test.users to users_test.users;
drop database test;
/* mysql -uroot -p123456 -e 'create database if not exists users_test'
list_table=$(mysql -uroot -p12345678 -Nse "select table_name from information_schema.TABLES where TABLE_SCHEMA='test'")

for table in $list_table
do
    mysql -uroot -p123456 -e "rename table test.$table to users_test.$table"
done */


-------------------------------------------------------------------------------------------
#预发布环境

#########################
#PHP和运营后台stg
#########################
/* http://rap.gstzy.cn/org/index.do */
# 预发布环境
120.76.100.51 www-stg.gstzy.cn
120.76.100.51 admin-stg.gstzy.cn
120.76.100.51 data-stg.gstzy.cn
120.76.100.51 chat-stg.gstzy.cn
120.76.100.51 api-stg.gstzy.cn
120.76.100.51 wx-stg.gstzy.cn
120.76.100.51 cas-stg.gstzy.cn
120.76.100.51 salary-stg.gstzy.cn
120.76.100.51 smis-stg.gstzy.cn
120.76.100.51 news-stg.gstzy.cn

#########################
# 前端
#########################
119.23.154.165 stg-doc.gstyun.cn
119.23.154.165 stg-reg.gstyun.cn
119.23.154.165 stg-his.gstyun.cn

#139.224.207.22 stg.gstyun.cn
#139.224.207.22 stg-reg.gstyun.cn


#0.0.0.0 www.xmind.net
# common
# 这儿是公用 hosts，其内容会插入到各个方案最前面
120.76.100.51 rap.gstzy.dev
120.76.100.51 rap.gstzy.cn
120.76.100.51 modoer.gstzy.cn

#139.196.212.38 doctor.gstzy.cn

# --------------------------------------------------
# 开发环境
#########################
#PHP和运营后台dev
#########################
172.30.12.10 www-dev.gstzy.cn
172.30.12.10 wx-dev.gstzy.cn
172.30.12.10 dev.jenkins.gstzy.cn
172.30.12.10 data-dev.gstzy.cn
172.30.12.10 chat-dev.gstzy.cn
120.76.100.51 api-dev.gstzy.cn
120.76.100.51 cas-dev.gstzy.cn
120.76.100.51 salary-dev.gstzy.cn
##测试环境
172.30.12.10 admin.gstyun.local
172.30.12.10 cas.gstyun.local



#########################
# 前端
#########################

#微信加端口2081, H5官网加端口2082
127.0.0.1 local.gstzy.cn
#127.30.10.37 dev.gstzy.cn
#微信加端口2081, H5官网加端口2082 
#172.30.12.10 dev.gstzy.cn

#########################
# PHP 测试
#########################
172.30.12.10   doctor-crm-dev.gstzy.cn

#172.30.10.87 local.gstzy.cn
#139.224.207.22 stg.gstzy.cn
#172.30.12.70 test.gstyun.local
127.0.0.1 test.gstyun.cn


# 开发环境
172.30.12.10 www-dev.gstzy.cn
172.30.12.10 wx-dev.gstzy.cn
120.76.100.51 admin-dev.gstzy.cn
172.30.12.10 dev.jenkins.gstzy.cn
172.30.12.10 data-dev.gstzy.cn
172.30.12.10 chat-dev.gstzy.cn
120.76.100.51 api-dev.gstzy.cn
120.76.100.51 cas-dev.gstzy.cn
120.76.100.51 salary-dev.gstzy.cn
120.76.100.51 smis-dev.gstzy.cn
120.76.100.51 news-dev.gstzy.cn


# --------------------------------------------------
# 前端

119.23.154.165 stg.gstzy.cn
119.23.154.165 stg-guoshou.gstyun.cn
120.76.100.51 dev.gstzy.cn
172.30.12.70 inner.gstzy.cn

127.0.0.1 dev.gstyun.local
127.0.0.1 local.gstzy.cn
127.0.0.1 local.gstyun.cn

/*
http://120.25.154.225/cgi-bin/pharmacyinfo/queryrecipe
Name	Identifier	Type	Remark
开始时间	start_time	string	
配方类型	recipe_type	string	1, //膏方 2, //丸剂 3, //散剂 4, //灌肠方 5, //足浴方 6, //雾化液 7, //汤方 8, //茶方 9, //酒方 10, //面膜
起始页	page_no	number	
类别	max_type	string	1：协定方 2：医保套餐
结束时间	end_time	string	
配方id	recipe_id	string	
配方名称	recipe_name	string	
门店编号	clinic_id	string	his下载需要填
分页大小	page_size	number	
查询方式	method	string	1指定recipe_id,查询明细 2：指定名称跟协定方类型查询配方列表 3：根据更新时间查询列表（含项目明细）。4：拉取所有列表

current_page	当前页	number	
data	配方	array<object>	
    item_list	查询列表时，没有该项	array<object>	
        deco_type	煎法	string	1, //先煎 2, //后下 3, // 烊化 4, //久煎 5, //冲服 6, //焗 7, //打 8, //另煎 9, //包煎 10,//打碎后煎
        is_show	是否展示	string	
        item_code	项目编码	string	
        item_name	项目名称	string	
        item_num	项目数量	string	
        pharma_units	药房销售单位/计价单位	string	
        recipe_id	配方id	string	
        standard	规格	string	
    min_dosage	起做剂数	string	
    product_num	成品数	string	
    recipe_id	配方id	string	
    recipe_name	配方名称	string	
    recipe_type	协定方类型	string	1, //膏方 2, //丸剂 3, //散剂 4, //灌肠方 5, //足浴方 6, //雾化液 7, //汤方 8, //茶方 9, //酒方 10, //面膜
    remark	备注	string	
    standard	包装量	string	
list_num	当前记录数	number	
message	错误消息	string	
page_size	分页大小	number	
status	状态值 0 正常	string	
total_num	总记录数	number	
total_page	总页数	number	
*/