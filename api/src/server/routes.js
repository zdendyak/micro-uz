import scheduleController from '../controllers/schedule-controller';
import stationController  from '../controllers/station-controller';

const setupRoutes = app => {
  app.post('/api/v1/stations', stationController.getStations);

  app.post('/api/v1/schedule', scheduleController.getSchedule);
};

export default setupRoutes;
