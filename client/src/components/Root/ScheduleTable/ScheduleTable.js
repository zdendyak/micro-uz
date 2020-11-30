import React from 'react';
// import styled from 'styled-components';

const QUOTE_RE = new RegExp("&quot;", 'g');
const decodeQoute = str => str.replace(QUOTE_RE,'"');
const getTableRow = (data, head=false, index=0) => Array.isArray(data) && <tr key={`r_${index}`}>{data.map((col, i) => head ? (<th key={`h_${index}_${i}`}>{decodeQoute(col)}</th>) : (<td key={`c_${index}_${i}`}>{decodeQoute(col)}</td>))}</tr>;

export function ScheduleTable (props) {
  const { schedule } = props;
  return schedule && (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          { schedule.head && getTableRow(schedule.head, true)}
        </thead>
        <tbody>
          { schedule.data && schedule.data.map((rowData, i) => getTableRow(rowData, false, i))}
        </tbody>
      </table>
    </div>
  )
}

export default ScheduleTable;
