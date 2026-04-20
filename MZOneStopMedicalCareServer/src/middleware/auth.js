const redis = require('../config/redis');
const AdminUser = require('../models/adminUser');
const { fail } = require('./response');

const TOKEN_PREFIX = 'medicalAdminToken:';

async function authMiddleware(req, res, next) {
  const memberToken = req.headers['membertoken'] || req.headers['memberToken'];
  if (!memberToken) {
    return fail(res, '00300001', '缺少 memberToken');
  }

  const memberId = await redis.get(TOKEN_PREFIX + memberToken);
  if (!memberId) {
    return fail(res, '00300002', 'memberToken 无效或已过期');
  }

  const member = await AdminUser.findOne({ memberId });
  if (!member) {
    return fail(res, '00300003', '账号不存在');
  }

  req.memberToken = memberToken;
  req.memberId = memberId;
  req.admin = member;
  next();
}

module.exports = authMiddleware;
module.exports.TOKEN_PREFIX = TOKEN_PREFIX;
