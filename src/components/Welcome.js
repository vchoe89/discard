import React from 'react';
import {NavLink} from 'react-router-dom';


class Welcome extends React.Component {




  render() {
    return(
      <div className='welcome-page'>
        <h1 id='welcome-header'>Welcome! My Name is Victor Choe.</h1>
        <h1 id='welcome-header'>I am a Full Stack Developer.</h1>
        <NavLink to='/about'>Get Started!</NavLink>
      </div>
    )
  }
}


export default Welcome;
