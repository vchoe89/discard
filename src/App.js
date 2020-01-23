import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';
import { Nav } from 'react-bootstrap';
import Welcome from './components/Welcome.js'
import About from './components/About.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <React.Fragment>
      <Navbar fixed='top' />
      <Welcome />
      <About />
    </React.Fragment>

  );
}

export default App;
