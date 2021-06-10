import React, { useState, forwardRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const ButtonStyle = styled.button`
.example-custom-input {
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  font-size: 14px;
}
:hover {
  box-shadow: 0px 0px 6px rgba(34, 167, 240, 1);
}
`;

function DatePick() {
  const [startDate, setStartDate] = useState(new Date());
  
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>

  ));
  return (
    <ButtonStyle>
    <DatePicker
      todayButton="Today"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
    </ButtonStyle>
  );
};

export default DatePick;
