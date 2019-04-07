const { app } = require('egg-mock/bootstrap');
const assert = require('assert');


let data = {
  recipe_id: 3,
  recipe_name: 'ceshi2',
  item_list: '{"item":"2", "size":"22"}',
  min_dosage: 2,
  product_num: 2,
  standard: 2,
  recipe_type: 1,
  remark: 'ceshi xie ding fang 2'
}

describe(`service/gst/recipeTemplate.test.js`, () => {
  describe('处方模版操作', () => {
    it('插入记录', function* () {
      const ctx = app.mockContext();
      let result = yield ctx.service.gst.recipeTemplate.addGstRecipe(data);
      assert(result);
      assert(typeof result == "object");
    })
  })

});