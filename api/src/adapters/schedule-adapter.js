import axios from 'axios';
import accessEnv from '../helpers/accessEnv';

const SCHEDULE_URL = accessEnv("SHEDULE_SERVICE_URL", "http://localhost:3001");
const PARSE_URL = accessEnv("PARSER_SERVICE_URL", "http://localhost:3003");

export const getSchedule = async data => {
  try {
    const response = await axios.post(`${SCHEDULE_URL}/schedule`, data); 
    const page = response.data;
    const parsedResponse = await axios({
      url: `${PARSE_URL}/parse`, 
      method: 'POST',
      headers: { 'content-type': 'text/html' },
      data: page
    });
    const schedule = parsedResponse.data;

    return { schedule };
    // const schedule = await axios({
    //   url: `${PARSE_URL}/parse`, 
    //   method: 'POST',
    //   headers: { 'content-type': 'text/html' },
    //   data: axios({
    //     url: `${SCHEDULE_URL}/schedule`, 
    //     method: 'POST',
    //     data,
    //     responseType: 'stream'
    //   })
    // });
    // return { schedule };
  } catch (e) {
    return { error: 'internal error', data: e };
  }
}

export default {
  getSchedule
};
