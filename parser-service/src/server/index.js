import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import accessEnv from '#root/helpers/accessEnv';
import setupRoutes from './routes';

const PORT = accessEnv("PORT", 3003);

const app = express();

app.use(bodyParser.text({ type: 'text/html', limit: '10mb' }));

app.use(cors({
  origin: (origin, cb) => cb(null, true),
  credentials: true
}));

setupRoutes(app);

app.listen(PORT, "0.0.0.0", () => {
  console.info(`Parser service is listening on ${PORT}`);
});
