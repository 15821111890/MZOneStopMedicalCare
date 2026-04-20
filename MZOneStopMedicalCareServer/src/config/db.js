const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mz_medical';

function connectMongoDB() {
  return mongoose.connect(MONGO_URI).then(() => {
    console.log(`[MongoDB] connected: ${MONGO_URI}`);
  });
}

module.exports = { connectMongoDB, MONGO_URI };
