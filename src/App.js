import React from 'react'
import Welcome from './componen/Welcome'

const App = () => {
  // let user = "Aris Purnama";
  let user;
  return <>{user != undefined ? <Welcome name={user} /> : <button>Login</button>}</>;
}

export default App
