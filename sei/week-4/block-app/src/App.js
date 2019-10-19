import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() }
  }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID)
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
      
  }
  render() {
    return (
      <div className="app" >
          <h1>Hello, world!</h1>
        <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
    
      </div>
    );
  }
}
export default App;
