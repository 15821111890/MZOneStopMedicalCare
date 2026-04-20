const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema(
  {
    memberId: { type: String, required: true, unique: true, index: true },
    account: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    nickName: { type: String, default: '' },
    roleType: { type: Number, default: 1 },
    status: { type: Number, default: 1 }
  },
  { collection: 'medicalAdminUsers', timestamps: true }
);

module.exports = mongoose.model('MedicalAdminUser', adminUserSchema);
