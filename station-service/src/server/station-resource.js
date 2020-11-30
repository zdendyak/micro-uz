import axios from 'axios';
import accessEnv from '#root/helpers/accessEnv';

export async function getStations (query) {
  try {
    const RESOURCE_URL = accessEnv('RESOURCE_URL', 'https://uz.gov.ua');

    const response = await axios.get(`${RESOURCE_URL}/passengers/timetable/suggest-station`, {
      params: {
        q: query
      }
    });

    const stations = response.data;
    if (Array.isArray(stations)) {
      return stations.map(station => {
        const [name, id] = station.split("~");
        return { name, id };
      });
    } 
    return [];
  } catch (e) {
    console.error(e);
    return [];
  }
}