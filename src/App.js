import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Welcome from './components/Welcome.js'
import About from './components/About.js'
import Navibar from './components/Navibar.js'
import Projects from './components/Projects.js'
import Blogs from './components/Blogs.js'
import Contact from './components/Contact.js'


function App() {
  return (
    <Router>
      <Navibar sticky='top'/>
      <Switch>
        <Route  path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
