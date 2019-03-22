module.exports=(app)=>{
  const {router, controller} = app
  const urlAlias = '/jsapi';
  
  router.resources(`${urlAlias}/user`, controller.baseController);
  router.resources(`${urlAlias}/login`, controller.login);

  app.get('testCpi', `${urlAlias}/testapi`, controller.user.index);
}