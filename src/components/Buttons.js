import React from 'react';
import styled from 'styled-components';

const Buttons = (props) => {
  return (
  <div>
    <Button onClick={props.increment}>
      Increment Number
    </Button>
    
    <Button onClick={props.decrement}>
      Decrement Number
    </Button>

    <Button onClick={props.reset}>
      Reset Counter
    </Button>
  </div>
  )
}

const Button = styled.button`
  border: 2px solid #000;
  margin: 8px;
  padding: 2px 10px;
`;
export default Buttons;