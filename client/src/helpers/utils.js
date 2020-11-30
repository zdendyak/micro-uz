import axios from 'axios';
import accessEnv from './accessEnv';

const API_URL = accessEnv('API_URL', 'http://localhost:3000');

export const loadOptions = async (query) => {
  try {
    const url = `${API_URL}/api/v1/stations`;
    const response = await axios.post(url, { query });  
    const { stations } = response.data;
    return stations.map(s => ({ value: s.id, label: s.name }));
  } catch (e) {
    return [];
  }
};

export const getSchedule = async (data) => {
  try {
    const url = `${API_URL}/api/v1/schedule`;
    const response = await axios.post(url, data);  
    const { schedule } = response.data;
    return schedule;
  } catch (e) {
    return null;
  }
}