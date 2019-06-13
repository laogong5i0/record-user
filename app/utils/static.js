const _statusCode = {
  success: 0
}

// 弃用，待删除
const _returnBody = {
  data: {},
  message: '',
  status: _statusCode.success
}

module.exports.statusCode = _statusCode
module.exports.returnBody = _returnBody
