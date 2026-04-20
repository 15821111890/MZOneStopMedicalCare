const express = require('express');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const redis = require('../config/redis');
const AdminUser = require('../models/adminUser');
const authMiddleware = require('../middleware/auth');
const { success, fail } = require('../middleware/response');

const router = express.Router();

const TOKEN_PREFIX = authMiddleware.TOKEN_PREFIX;
const TOKEN_TTL = parseInt(process.env.MEMBER_TOKEN_TTL_SECONDS || '604800', 10);

router.post('/login', async (req, res) => {
  const { account, password } = req.body || {};
  if (!account || !password) {
    return fail(res, '00200001', '账号或密码不能为空');
  }

  const admin = await AdminUser.findOne({ account });
  if (!admin) {
    return fail(res, '00200002', '账号或密码错误');
  }
  if (admin.status !== 1) {
    return fail(res, '00200004', '账号已被禁用');
  }
  if (admin.password !== password) {
    return fail(res, '00200002', '账号或密码错误');
  }

  const memberToken = crypto.randomBytes(16).toString('hex');
  await redis.set(TOKEN_PREFIX + memberToken, admin.memberId, 'EX', TOKEN_TTL);

  return success(res, {
    memberToken,
    memberId: admin.memberId,
    account: admin.account,
    nickName: admin.nickName,
    roleType: admin.roleType
  });
});

router.post('/logout', authMiddleware, async (req, res) => {
  await redis.del(TOKEN_PREFIX + req.memberToken);
  return success(res, {});
});

router.get('/me', authMiddleware, async (req, res) => {
  const admin = req.admin;
  return success(res, {
    memberId: admin.memberId,
    account: admin.account,
    nickName: admin.nickName,
    roleType: admin.roleType
  });
});

router.post('/register', authMiddleware, async (req, res) => {
  if (req.admin.roleType !== 1) {
    return fail(res, '00300004', '无权操作');
  }
  const { account, password, nickName } = req.body || {};
  if (!account || !password) {
    return fail(res, '00200001', '账号或密码不能为空');
  }
  const exists = await AdminUser.findOne({ account });
  if (exists) {
    return fail(res, '00200003', '账号已存在');
  }
  const admin = await AdminUser.create({
    memberId: uuidv4(),
    account,
    password,
    nickName: nickName || account,
    roleType: 1,
    status: 1
  });
  return success(res, { memberId: admin.memberId, account: admin.account });
});

module.exports = router;
