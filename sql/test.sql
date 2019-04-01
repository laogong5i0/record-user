use test;
show tables;

-- 查看表结构
DESC users;

-- 创建用户表
create table users
(
  user_id int auto_increment primary key,
  user_name varchar(50) not null,
  phone long not null,
  email varchar(120) default null,
  address varchar(120) default null，
  role int default 0 comment '0管理员， '
  status int default 0 comment '用户状态，是否禁用, 1为禁用， 0为正常状态, 默认值为0',
  register_time timestamp default current_timestamp comment '用户创建时间',
  remark varchar(100) default null,
);

create table user_auths
(
  id int auto_increment primary key,
  user_id int not null,
  identity_type int default 0 comment '登录类型, 0密码登录，1微信登录',
  identifier varchar(200) not null comment '标识（手机号 邮箱 用户名或第三方应用的唯一标识）',
  credential varchar(200) not null comment '密码凭证（站内的保存密码，站外的不保存或保存token）',
  status int default 0 comment '用户状态，是否禁用, 1为禁用， 0为正常状态, 默认值为0',
  register_time timestamp default current_timestamp comment '用户创建时间',
  remark varchar(100) default null,
);

alter table users add (
  password varchar(50) not null,
  status int default 0 comment '用户状态，是否禁用, 1为禁用， 0为正常状态, 默认值为0',
  
  
);
insert into users_test (user_name, password) values ('admin', 'admin');

select * from users_test;