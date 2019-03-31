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
GO

-- 查看表结构
desc users;
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
    -> password varchar(50) not null, 
    -> address varchar(120) default NULL
    -> );
