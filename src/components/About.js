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
            <div id='about-icons1'>
              <i class="material-icons">speed</i>
                <h3 id='secondary-header'>fast</h3>
                  <p>Fast load times and high speed interaction.</p>
            </div>
            <div id='about-icons2' >
              <i class="material-icons">touch_app</i>
                <h3 id='secondary-header'>responsive</h3>
                  <p>Layouts that work with any platform, big or small.</p>
            </div>
            <div id='about-icons3'>
              <i class="material-icons">offline_bolt</i>
                <h3 id='secondary-header'>dynamic</h3>
                  <p>Interactive websites that come to life.</p>
            </div>
          </div>

            <div id='bar-section'>
              <h2 id='bar-names'>Ruby/Rails</h2>
              <ProgressBar animated now={50} />
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
