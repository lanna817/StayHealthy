import React from 'react';

function Login(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input onChange={props.handleChange} type='text' name="username" placeholder="username" />
      <input onChange={props.handleChange} type='password' name="password" placeholder="password" />
      <input type='submit' value="Submit" />
    </form>
  )
}


export default Login;