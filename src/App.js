import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Welcome from './components/Welcome.js'
import About from './components/About.js'
import Navibar from './components/Navibar.js'
import Projects from './components/Projects.js'
import Blogs from './components/Blogs.js'


function App() {
  return (
    <Router>
    <React.Fragment>
      <Navibar />
      <Welcome />
      <About />
      <Projects />
      <Blogs />
    </React.Fragment>
    </Router>
  );
}

export default App;
