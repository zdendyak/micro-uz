import axios from 'axios';
import accessEnv from '../helpers/accessEnv';

const STATION_URL = accessEnv("STATION_SERVICE_URL", "http://localhost:3002");

export const getStations = async query => {
  try {
    const response = await axios.post(`${STATION_URL}/list`, { query }); 
    const stations = response.data;
    return { stations }
  } catch (e) {
    console.error(e);
    return { error: 'internal error', data: e };
  }
}

export default {
  getStations
};
