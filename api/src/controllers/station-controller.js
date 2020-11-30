import StationAdapter from '../adapters/station-adapter';

const getStations = async (req, res, next) => {
  console.info('body', req.body);
  const { query } = req.body;
  const { stations, error } = await StationAdapter.getStations(query);
  if (error) {
    return res.status(501).json({ error });
  } else {
    return res.status(200).json(stations);
  }
}

export default {
  getStations
}
