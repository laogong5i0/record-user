module.exports=(app)=>{
  const {router, controller} = app
  const api_name_space = '/jsapi';
  
  router.resources(`${api_name_space}/user`, controller.baseController);
  router.resources(`${api_name_space}/login_api`, controller.login);

  app.get('testCpi', `${api_name_space}/testapi`, controller.user.index);
  app.get(
    'routes',
    '/*',
    controller.routes.show
  );
}