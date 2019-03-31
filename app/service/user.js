
module.exports = app =>{
  const {Service, mysql} = app;
console.log('sdjjjjjjjj', app.mysql)
  class UserService extends app.Service {
    *login(request) {
      console.log('--->', request);
      let condition = { name: request.name };
      let record = yield this.app.mysql.get("users", condition);
      console.log('========>>app', app);
      console.log('==========>>this.app', app==this.app);
      console.log('=----====>>>', app.mysql);
      return record;
    }
  }

  return UserService;
}