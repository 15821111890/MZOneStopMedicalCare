require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { connectMongoDB } = require('./config/db');
require('./config/redis');

const { success } = require('./middleware/response');
const authMiddleware = require('./middleware/auth');

const authRouter = require('./routes/auth');
const leadRouter = require('./routes/lead');

const PORT = parseInt(process.env.PORT || '3003', 10);

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(bodyParser.json({ limit: '2mb' }));

app.get('/health', (req, res) => success(res, { status: 'ok' }));

app.use('/admin', authRouter);
app.use('/lead', leadRouter);

app.use((err, req, res, next) => {
  console.error('[Server] unhandled error:', err);
  res.status(500).json({ resCode: '00900001', msg: '服务内部错误', obj: {} });
});

connectMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`[MedicalServer] listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('[MongoDB] connection failed:', err.message);
    process.exit(1);
  });

module.exports = app;
