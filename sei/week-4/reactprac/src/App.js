import React from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './components/Event';
import Header from './components/Header';

function App() {
  const eventOne = {
    title: "Basketball Practice", time: "7 - 9pm", location: "The School Gym"
  }
  const eventTwo = {
    title: "Soccer Practice", time: "6:45pm -midnight", location: "The Soccer Field"
  }
  return (
    <div className="app">
      <Header />
      <Event title={eventOne.title} time= {eventOne.time}
        location={eventOne.location}/>
      <Event title={eventTwo.title} time={eventTwo.time}
        location={eventTwo.location} />
    </div>
  );
}

export default App;
