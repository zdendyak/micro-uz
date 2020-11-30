import { getStations } from  './station-resource';

const setupRoutes = app => {
  app.post('/list', async (req, res, next) => {
    const stations = await getStations(req.body.query);
    return res.json({ stations });
  });
};

export default setupRoutes;
