const assert = require('assert');
const { app } = require('egg-mock/bootstrap');
const { returnBody } = require('../../../app/utils/static');

describe('test/controller/gst/recipeTemplate.test.js', () => {
  describe('协定方模板 controller', () => {
    it('查询协定方列表成功与否', () => {
      app.mockHttpclient('http://lb-cgi.gstyun.cn/cgi-bin/pharmacyinfo/queryrecipe?page_no=1&page_size=10', {
        data: {current_page:1},
        status:200,
      });

      return app.httpRequest()
        .get(`/jsapi/gst/getgstrecipe?page_no=1&page_size=10`)
        .expect(200)
        .expect({current_page:1});
    })
  })


})