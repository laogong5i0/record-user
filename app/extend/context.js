const statusCode = require('../utils/static').statusCode;

module.exports = {
  success(message, data, total='') {
    this.body={
      data,
      message,
      status: statusCode.success,
      total
    }
  },

  failure(message, status, data={}) {
    this.body={
      data,
      message,
      status
    }
  }
}