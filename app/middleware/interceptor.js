
// 未登陆的都跳到登陆页面
module.exports = options => {
  return async function interceptor(ctx, next) {
      let userInfo = ctx.session.userInfo;
      // if(!userInfo) {
      //     return ctx.redirect('/login');
      // }
      await next();
  };
}