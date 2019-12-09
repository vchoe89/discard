import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Welcome from './components/Welcome.js'
import About from './components/About.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <Route>
      <Switch>
        <Welcome exact path='/'/>
        <About ecact path='/about'/>
      </Switch>
      <Navbar />
    </Route>

  );
}

export default App;
