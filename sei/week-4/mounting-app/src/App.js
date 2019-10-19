import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import People from './component/People';

class App extends React.Component {
  constructor(props) {  /*can use props for super and constructor in class app  */
    super(props);
    this.state = {
      people:[]
    }
    
  }
  
    async componentDidMount() {
      const response = await axios.get("https://swapi.co/api/people")
      const people = response.data.results
      this.setState ({people: people}) /* This run after render */
    }
  

  render() {
    console.log(this.state) /*second thing to run, runs again last after componentDidMount */
    return (
      <div className="app">

      <People people={this.state.people} /> 
    
      </div>
    );
  }
}

export default App;
