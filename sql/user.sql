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
--在元数据的表里面看
select * from COLUMNS where TABLE_SCHEMA='my_db' and TABLE_NAME='test1' \G


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





-------------------------------------------------------------------------------------------
#预发布环境

#########################
#PHP和运营后台stg
#########################

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
