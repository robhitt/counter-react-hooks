import React from 'react';

const CurrentCount = (props) => {
  return (
    <h3 style={{margin: '8px 0', padding: '0 8px', fontFamily: 'arial, helvetica, serif'}}>
      The current count is: { props.count }.
    </h3>
  );
} 

export default CurrentCount;