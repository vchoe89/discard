import React from 'react';
import {NavLink} from 'react-router-dom';


class Welcome extends React.Component {


    onToggle = () => {
      console.log("click")
    }


  render() {
    return(
      <div className='welcome-page'>
        <h1 id='hi'>Welcome! My Name is Victor Choe</h1>
        <h1 id='hi'>I am a Full Stack Developer</h1>
        <div>
          <NavLink to='/about'>View My Work</NavLink>
        </div>
      </div>
    )
  }
}


export default Welcome;
