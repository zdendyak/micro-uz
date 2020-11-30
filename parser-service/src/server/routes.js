import { parseHtml } from  './parser';

const setupRoutes = app => {
  app.post('/parse', async (req, res, next) => {
    const page = req.body;
    console.info('page', page);
    try {
      const parsed = parseHtml(page);
      return res.status(200).json(parsed);
    } catch (e) {
      return res.status(500).send({ error: 'cannot parse' });
    }
  });
};

export default setupRoutes;
