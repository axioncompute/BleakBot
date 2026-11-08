import express from 'express';
import cors from 'cors';
import commentsRouter from './routes/comments.routes.js';
import inquiriesRouter from './routes/inquiries.routes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/comments', commentsRouter);
app.use('/api/inquiries', inquiriesRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'bleakbot.in API stub' });
});

app.listen(PORT, () => {
  console.log(`BleakBot API stub listening on http://localhost:${PORT}`);
});
