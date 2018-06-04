import React from 'react';
const Results = (props) => (
  <div>
    <div>Results:</div>
    <div className='results'>
      <div className='term'>{props.results[0].term}</div>
      <div className='definition'>{props.results[0].definition}</div>
    </div>
  </div>
)

export default Results;