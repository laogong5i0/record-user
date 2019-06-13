const UUID = Symbol('Application#uuid');
const Snowflake = require('../utils/Snowflake');

module.exports = {
  get newuuid() {
    if (!this[UUID]) {
      this[UUID] = new Snowflake(1, 1, 0);
    }
    return this[UUID].nextId();
  },

  // git项目 egg-restapi-module-tool
  inarray(arr, obj) {
    let i = arr.length;
    while (i--) {
      if (arr[i] === obj)
        return true;
    }
    return false;
  },

  //把数组对象转成纯数组
  objtoarr(obj) {
    let values = [];
    obj.forEach((n, i) => {
      let _arr = [];
      for (let m in n) {
        _arr.push(n[m]);
      }
      values.push(_arr);
    })
    return values;
  }
}