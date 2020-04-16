import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Welcome from './components/Welcome.js'
import About from './components/About.js'
import Navibar from './components/Navibar.js'
import Projects from './components/Projects.js'
import Blogs from './components/Blogs.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isNavbarHidden: false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({isNavbarHidden: !this.state.isNavbarHidden})
  }

  render() {
  return (
    <Router>
      <Navibar />
      <Switch>
        <Route exact path='/' render={(props) => {
            return <Welcome isNavbarHidden={this.state.isNavbarHidden} handleClick={this.handleClick}/>
          }} />
        <Route exact path='/about' component={About}/>
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
    );
  }
}

export default App;

// { (this.state.isNavbarHidden === false ? null : <Navibar />)}
