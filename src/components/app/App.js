import React, { Component } from 'react';
import NavBar from '../navbar/NavBar'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faHome)

const App = () =>{
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
};

export default App
