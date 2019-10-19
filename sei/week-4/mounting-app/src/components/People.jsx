import React from 'react';

function People(props) {


  return (
    <div id="people">
    {
      props.people.map(person => (
        <div key={person.name} className="person">
          <h3>{person.name}</h3>
          <p>height: {person.height} centimeters</p>
          <p>mass: {person.mass} kilograms</p>
          <p>eye color: {person.eye_color}</p>
        </div>
      ))
    }
  </div>
)
}
export default People;

