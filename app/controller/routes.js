module.exports = (app) => {
  class RoutesController extends app.Controller {
    // async home() {
    //   this.ctx.redirect('/dashboard');
    // }

    async show() {
      await this.ctx.render('pages/login', {te:'jjj'});
    }

    async showGst(){
      await this.ctx.render('pages/gst');
    }
  }
  return RoutesController;
};
