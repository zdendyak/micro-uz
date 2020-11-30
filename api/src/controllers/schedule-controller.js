import ScheduleAdapter from '../adapters/schedule-adapter';

const getSchedule = async (req, res, next) => {
  const { schedule, error } = await ScheduleAdapter.getSchedule(req.body);
  console.log({schedule, error});
  if (error) {
    return res.status(501).json({ error });
  } else {
    return res.status(200).json({ schedule });
  }
}

export default {
  getSchedule
}
