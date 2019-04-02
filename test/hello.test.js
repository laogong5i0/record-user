'use strict';

const assert = require('assert');

describe('test/hello.test.js', () => {
  it('单元测试 hello test', () => {
    assert(Date.now() > 0);
  });
});