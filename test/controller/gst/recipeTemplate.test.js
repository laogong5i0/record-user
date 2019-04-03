const assert = require('assert');
const { app } = require('egg-mock/bootstrap');
const { returnBody } = require('../../../app/utils/static');

const mockrecipTemp = {
  data: [],
  current_page: 1,
  list_num: 10,
  page_size: 10,
  total_num: 100,
  total_page: 10,
  message: '',
  status: 0,
}
describe('test/controller/gst/recipeTemplate.test.js', () => {
  describe('协定方模板 controller', () => {
    it('查询列表成功与否', () => {
      app.mockHttpclient('http://lb-cgi.gstyun.cn/cgi-bin/pharmacyinfo/queryrecipe', {
        data: mockrecipTemp,
        status: 200,
      });

      return app.httpRequest()
        .get(`/jsapi/gst/getgstrecipes?page_no=1&page_size=10&max_type=1`)
        .expect(200)
        .expect(mockrecipTemp);
    })
    it('检查参数是否合法', () => {
      app.mockHttpclient('http://lb-cgi.gstyun.cn/cgi-bin/pharmacyinfo/queryrecipe', {
        data: { ...mockrecipTemp, message: '参数不合法', status: 400 },
        status: 200,
      });

      return app.httpRequest()
        .get(`/jsapi/gst/getgstrecipes?page_no=1&max_type=1`)
        .expect(200)
        .expect({ ...mockrecipTemp, message: '参数不合法', status: 400 });
    })
  })



})