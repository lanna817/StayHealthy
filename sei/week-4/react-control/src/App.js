import React from 'react';
import './App.css';
import Login from './components/Login';
import Main from './components/Main'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false

    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value

    })

  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loggedIn: true
    })
  }
  handleLogout = () => {
    this.setState({

      loggedIn: false
    })




  }

  render() {
    return (
      <div className="app">
        {this.state.loggedIn ? <Main username={this.state.username} handleLogout={this.handleLogout} /> : <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        }

        <Login handleChange /*<-name value given to pass thorough props*/={this.handleChange}/*<-this refers to function at the top*/ handleSubmit={this.handleSubmit} />

        <Main username={this.state.username} handleLogout={this.handleLogout} />
      </div>
    );
  }
}
export default App;
