import axios from 'axios';
import accessEnv from '#root/helpers/accessEnv';

export async function getSchedule (params) {
  try {
    const RESOURCE_URL = accessEnv('RESOURCE_URL', 'https://uz.gov.ua');
    console.info('params', params);
    const response = await axios.get(`${RESOURCE_URL}/passengers/timetable`, { params });
    
    return response.data;    
  } catch (e) {
    console.error(e);
    return [];
  }
}