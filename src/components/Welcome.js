import React from 'react';
import {NavLink} from 'react-router-dom';
import {Animated} from 'react-animated-css';
import jswallpaper from '../images/jswallpaper.jpg'


class Welcome extends React.Component {




  render() {
    return(
      <React.Fragment>
      <div className='welcome-page'>
          <img id='welcome-image' src='https://southafricatoday.net/wp-content/uploads/2018/10/1_-xlCG5r86ocNFhC5iE658A.jpeg' />
          <div id='welcome-container'>
              <h1 id='welcome-title' >Welcome</h1>
              <NavLink  id='welcome-button' to='/about'>Click Here To Learn More</NavLink>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Welcome;

// onClick={(e) => {this.props.handleClick(e)}}
