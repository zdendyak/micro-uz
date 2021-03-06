import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import accessEnv from '#root/helpers/accessEnv';

import setupRoutes from './routes';

const PORT = accessEnv("PORT", 3000);

const app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: (origin, cb) => cb(null, true),
  credentials: true
}));

setupRoutes(app);

app.listen(PORT, "0.0.0.0", () => {
  console.info(`Api listening on port ${PORT}`);
});
