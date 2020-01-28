import React from 'react'
import { ProgressBar } from 'react-bootstrap';

class About extends React.Component{


  render(){
    return(
      <div id='about-page'>
        <h1 id='headlines'>About</h1>
        <h2 id='welcome-header'>Welcome! My Name is Victor Choe.</h2>
        <h2 id='welcome-header'>I am a Full Stack Developer.</h2>
          <div id='icon-section'>
            <div>
              <i class="material-icons">
                speed
                </i>
                <h3>fast</h3>
            </div>
            <div>
              <i class="material-icons">
                touch_app
                </i>
                <h3>responsive</h3>
            </div>
            <div>
              <i class="material-icons">
                offline_bolt
                </i>
                <h3>dynamic</h3>
            </div>
            <div id='bar-section'>
              <h2 id='bar-names'>Ruby/Rails</h2>
              <ProgressBar animated now={50} />
            </div>
            <div id='bar-section'>
              <h2 id='bar-names'>JavaScript</h2>
              <ProgressBar animated now={50} />
            </div>
            <div id='bar-section'>
              <h2 id='bar-names'>React</h2>
              <ProgressBar animated now={50} />
            </div>
            <div id='bar-section'>
              <h2 id='bar-names'>HTML</h2>
              <ProgressBar animated now={50} />
            </div>
            <div id='bar-section'>
              <h2 id='bar-names'>CSS</h2>
              <ProgressBar animated now={50} />
            </div>
            <div id='bar-section'>
              <h2 id='bar-names'>Redux</h2>
              <ProgressBar animated now={50} />
            </div>
          </div>
      </div>

    )
  }
}

export default About;
