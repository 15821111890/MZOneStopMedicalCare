const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    leadId: { type: String, required: true, unique: true, index: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    fullName: { type: String, default: '', index: true },
    email: { type: String, default: '', index: true },
    phone: { type: String, default: '', index: true },
    country: { type: String, default: '' },
    medicalInterest: { type: String, default: '', index: true },
    message: { type: String, default: '' },
    source: { type: String, default: 'client-web' },
    status: { type: Number, default: 0 },
    remoteIp: { type: String, default: '' },
    userAgent: { type: String, default: '' }
  },
  { collection: 'medicalLeads', timestamps: true }
);

leadSchema.index({ createdAt: -1 });

module.exports = mongoose.model('MedicalLead', leadSchema);
