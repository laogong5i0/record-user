module.exports = (app) => {
  const { router, controller } = app
  const urlAlias = '/jsapi';

  // router.resources(`${api_name_space}/user`, controller.baseController);
  // router.resources(`${api_name_space}/user`, controller.login.create);
  // router.resources(`${api_name_space}/login_api`, controller.login.create);

  router.get('login', `/login`, controller.login.show);
  router.get(
    'routes',
    '/*',
    controller.routes.show
  );
}