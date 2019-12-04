import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Welcome from './components/Welcome.js'
import About from './components/About.js'

function App() {
  return (
    <Route>
      <Switch>
        <Welcome exact path='/'/>
        <About ecact path='/about'/>
      </Switch>

    </Route>

  );
}

export default App;
