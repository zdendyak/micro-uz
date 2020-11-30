import React, { Component } from 'react';
import { getSchedule } from '#root/helpers/utils.js';
import Form from '../RequestForm';
import ScheduleTable from '../ScheduleTable';

export class Schedule extends Component {
  state = {
    schedule: null
  };

  handleFormSubmit = async (data) => {
    const schedule = await getSchedule(data);
    this.setState({ schedule });
  }

  render () {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Розклад руху поїздів</h1>
        <Form handleFormSubmit={this.handleFormSubmit} />
        <ScheduleTable schedule={this.state.schedule} />
      </div>
    )
  }
}

export default Schedule
