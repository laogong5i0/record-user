module.exports=(app)=>{
  const {router, controller} = app
  const api_name_space = '/jsapi';

  // router.resources(`${api_name_space}/user`, controller.baseController);
  // // router.resources(`${api_name_space}/login/:id/:name/:password`, controller.login);
  router.resources(`${api_name_space}/login`, controller.login);

  const {gst} = controller;
  router.get('gst', `${api_name_space}/gst/getgstrecipe`, gst.recipeTemplate.findGstRecipe);
  
  
//   router.get('login', `/login`, controller.login.show);
//   router.get(
//     'routes',
//     '/*',
//     controller.routes.showGst
//   );
}