const express = require('express');
const { v4: uuidv4 } = require('uuid');

const Lead = require('../models/lead');
const authMiddleware = require('../middleware/auth');
const { success, fail } = require('../middleware/response');

const router = express.Router();

function escapeRegex(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

router.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    country,
    medicalInterest,
    message
  } = req.body || {};

  if (!firstName && !lastName && !email && !phone) {
    return fail(res, '00400001', '请填写姓名或联系方式');
  }
  if (!email && !phone) {
    return fail(res, '00400002', '请至少填写邮箱或电话');
  }

  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim();
  const lead = await Lead.create({
    leadId: uuidv4(),
    firstName: firstName || '',
    lastName: lastName || '',
    fullName,
    email: email || '',
    phone: phone || '',
    country: country || '',
    medicalInterest: medicalInterest || '',
    message: message || '',
    source: 'client-web',
    remoteIp: req.headers['x-forwarded-for'] || req.ip || '',
    userAgent: req.headers['user-agent'] || ''
  });

  return success(res, { leadId: lead.leadId });
});

router.get('/', authMiddleware, async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page || '1', 10));
  const pageSize = Math.min(100, Math.max(1, parseInt(req.query.pageSize || '20', 10)));
  const keyword = (req.query.keyword || '').trim();
  const medicalInterest = (req.query.medicalInterest || '').trim();

  const filter = {};
  if (medicalInterest) filter.medicalInterest = medicalInterest;
  if (keyword) {
    const re = new RegExp(escapeRegex(keyword), 'i');
    filter.$or = [
      { fullName: re },
      { firstName: re },
      { lastName: re },
      { email: re },
      { phone: re },
      { country: re },
      { message: re }
    ];
  }

  const [total, items] = await Promise.all([
    Lead.countDocuments(filter),
    Lead.find(filter).sort({ createdAt: -1 }).skip((page - 1) * pageSize).limit(pageSize)
  ]);

  return success(res, {
    page,
    pageSize,
    total,
    items: items.map(serializeLead)
  });
});

router.get('/:leadId', authMiddleware, async (req, res) => {
  const lead = await Lead.findOne({ leadId: req.params.leadId });
  if (!lead) return fail(res, '00400404', '留资不存在');
  return success(res, serializeLead(lead));
});

router.patch('/:leadId', authMiddleware, async (req, res) => {
  const { status } = req.body || {};
  const update = {};
  if (typeof status === 'number') update.status = status;
  if (Object.keys(update).length === 0) {
    return fail(res, '00400003', '没有可更新的字段');
  }
  const lead = await Lead.findOneAndUpdate({ leadId: req.params.leadId }, update, { new: true });
  if (!lead) return fail(res, '00400404', '留资不存在');
  return success(res, serializeLead(lead));
});

function serializeLead(lead) {
  return {
    leadId: lead.leadId,
    firstName: lead.firstName,
    lastName: lead.lastName,
    fullName: lead.fullName,
    email: lead.email,
    phone: lead.phone,
    country: lead.country,
    medicalInterest: lead.medicalInterest,
    message: lead.message,
    source: lead.source,
    status: lead.status,
    createdAt: lead.createdAt,
    updatedAt: lead.updatedAt
  };
}

module.exports = router;
