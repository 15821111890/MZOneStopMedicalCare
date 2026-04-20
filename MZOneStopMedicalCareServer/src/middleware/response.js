function success(res, obj) {
  return res.json({ resCode: '00100000', msg: '成功', obj: obj || {} });
}

function fail(res, resCode, msg) {
  return res.json({ resCode: resCode || '00900000', msg: msg || '失败', obj: {} });
}

module.exports = { success, fail };
