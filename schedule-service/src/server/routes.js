import { getSchedule, getStations } from  './schedule-resource';

const setupRoutes = app => {
  app.post('/schedule', async (req, res, next) => {
    const body = req.body;
    const query = {
      from_station: body.from_station,
      to_station: body.to_station,
      time_from: body.time_from || 0,
      time_to: body.time_to || 24,
      select_time: body.select_time || 2,
      by_route: body.by_route || "Пошук"
    }
    const schedule = await getSchedule(query);
    return res.send(schedule);
  });
};

export default setupRoutes;
