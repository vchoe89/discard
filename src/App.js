import React from 'react';
import ReactDOM from 'react-dom'
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
      <Navibar />
      <Switch>
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
