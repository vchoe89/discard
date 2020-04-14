import React from 'react';
import {NavLink} from 'react-router-dom';


class Welcome extends React.Component {




  render() {
    return(
      <React.Fragment>
      <div className='welcome-page'>
        <div id='welcome-container'>
          <h1 id='welcome-title' >Welcome</h1>
          <NavLink id='welcome-button' to='/about'>Click Here To Get Started</NavLink>
        </div>
      </div>
      </React.Fragment>
    )
  }
}


export default Welcome;
