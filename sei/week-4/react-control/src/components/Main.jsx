import React from 'react';

function Main(props) {
  return (
    
    <main>
      <h2>Welcome {props.username}</h2>
      <button onClick={props.handleLogout}>Logout</button>

    </main>




  )




}

export default Main;