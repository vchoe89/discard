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
import Footer from './components/Footer.js'


function App() {
  return (
    <Router>
      <Navibar />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route  path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/contact' component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
