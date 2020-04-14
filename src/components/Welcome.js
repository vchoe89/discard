import React from 'react';
import {NavLink} from 'react-router-dom';


class Welcome extends React.Component {




  render() {
    return(
      <React.Fragment>
      <div className='welcome-page'>
        <h1 id='welcome-title' >Welcome</h1>
        <NavLink to='/about'>Click Here</NavLink>
      </div>
      </React.Fragment>
    )
  }
}


export default Welcome;
