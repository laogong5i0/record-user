
module.exports = app =>{
  class UserService extends app.Service {
    * login(request) {
      let condition = { ...request };
      const client1 = app.mysql.get('db1');
      let record = yield client1.get("users_test", condition);
      // const rows = yield client1.query('select * from users_test where user_name=:name', {name: condition.name});
      return record;
    }
  }

  return UserService;
}