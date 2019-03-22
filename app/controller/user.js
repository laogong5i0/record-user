module.exports = app=>{
  class User extends app.Controller{
    async index() {
      // render view template in `app/views`
      await this.ctx.render('home');
    }
  }

  return User
}