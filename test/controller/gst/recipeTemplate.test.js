const assert = require('assert');
const { app } = require('egg-mock/bootstrap');
const {returnBody} = require('../../../app/utils/static');

describe('test/controller/gst/recipeTemplate.test.js', () => {
  // let app;
  // before(()=>{
  //   app = mock.app();
  //   return app.ready();
  // })

  describe('get gst协定方模板', () => {
    it('发起请求', ()=>{
      return app.httpRequest()
      .get(`/jsapi/gst/getgstrecipe`)
      .expect(200)
      .expect(returnBody);
    })
  })


})