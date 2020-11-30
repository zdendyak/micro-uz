import React, { Component } from 'react';
import styled from 'styled-components';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import { loadOptions } from '../../../helpers/utils';


const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px auto 60px;
`;

const hours = Array(25).fill(0).map((_, i) => { return ('0' + ~~(i)).replace(/\d(\d\d)/g, '$1') });
const from_hours = hours.slice(0, 24).map((label, value) => ({ label, value }));
const to_hours = hours.slice(1).map((label, i) => ({ label, value: i+1 }));

class Form extends Component {
  state = {
    from_station: null,
    to_station: null,
    select_time: 2,
    from_time: 0,
    to_time: 24 
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    const { from_station, to_station, select_time, from_time, to_time } = this.state;
    this.props.handleFormSubmit({
      from_station,
      to_station,
      select_time,
      from_time,
      to_time
    });
  }

  render = () => {
    const selectTimeOptions = [
      { label: 'Час відправлення', value: 2 },
      { label: 'Час прибуття', value: 1 }
    ];
    const { select_time, from_time, to_time } = this.state;

    return (
      <FormContainer>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="from_station">Станція відправлення</label>
            <AsyncSelect
              id="from_station"
              loadOptions={loadOptions}
              placeholder="Почніть набирати назву станції..."
              onChange={({ value }) => this.setState({ from_station: value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="to_station">Станція прибуття</label>
            <AsyncSelect 
              id="to_station"
              loadOptions={loadOptions}
              placeholder="Почніть набирати назву станції..."
              onChange={({ value }) => this.setState({ to_station: value })}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <Select 
                id="select_time"
                value={selectTimeOptions.find(op => op.value === select_time)}
                options={selectTimeOptions}
                placeholder=""
                onChange={({ value }) => this.setState({ select_time: value })}
              />
            </div>
            <div className="form-group col-md-3">
              <Select 
                id="from_time"
                value={from_hours.find(op => op.value === from_time)}
                options={from_hours}
                placeholder=""
                onChange={({ value }) => this.setState({ from_time: value })}
              />
            </div>
            <div className="form-group col-md-3">
              <Select 
                id="to_time"
                value={to_hours.find(op => op.value === to_time)}
                options={to_hours}
                placeholder=""
                onChange={({ value }) => this.setState({ to_time: value })}
              />
            </div>
          
          </div>
          <div className="form-group">
            <button
              type="submit" 
              disabled={!this.state.from_station || !this.state.to_station}
              className="btn btn-info float-right" 
            >
              Пошук
            </button>
          </div>
        </form>
      </FormContainer>
    )
  }
}

export default Form;
