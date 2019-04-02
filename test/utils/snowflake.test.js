'use strict';

const assert = require('assert');
const Snowflake = require('../../app/utils/Snowflake');

describe('test/utils/snowflake.test.js', () => {
  it('创建雪花算法实例', () => {
    assert(new Snowflake(1, 1, 0) !== undefined);
  });
  it('生成100个不相同的用户ID', () => {
    const sf = new Snowflake(1, 1, 0);
    let ids=[];
    for(let i=0; i<1000; i++){
      const temp = sf.nextId();
      if(ids.indexOf(temp)>=0){
        ids.push(temp);
      }
    }
    assert(ids.length<=0);
  })
});
