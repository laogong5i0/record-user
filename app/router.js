module.exports=(app)=>{
  const {router, controller} = app
  const api_name_space = '/jsapi';
  
  router.resources(`${api_name_space}/user`, controller.baseController);
  router.resources(`${api_name_space}/login`, controller.login);

  router.get('login', `/login`, controller.login.show);
  router.get(
    'routes',
    '/*',
    controller.routes.show
  );
}