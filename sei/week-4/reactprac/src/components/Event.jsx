import React from 'react';

function Event(props) {

  return (
    <div className="event">
      <h2>{props.title}</h2>
      <p>{props.time}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default Event;

