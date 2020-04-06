import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import dcwallpaper from '../images/dcwallpaper.jpg'

class About extends React.Component{


  render(){
    return(
      <div id='about-page'>
        <div id='about__container'>
            <div>
              <h1 id='headlines'>About</h1>
              <div id='welcome-header'>
                <h2> Welcome! My Name is Victor Choe.</h2>
                <h2>I am a Full Stack Developer.</h2>
                <hr/>
                <p id='tech-skills'> JavaScript | React | Redux | Ruby/Rails | HTML/CSS | SQL | JSON | AJAX | REST </p>
              </div>
            </div>
            <div id='icon-section'>

              <div id='fast'>
                  <i class="material-icons">speed</i>
                <h3 id='secondary-header'>fast</h3>
                <p id='icon-desc'>Fast load times and high speed interaction.</p>
              </div>

              <div id='responsive'>
                <i class="material-icons">touch_app</i>
                  <h3 id='secondary-header'>responsive</h3>
                    <p id='icon-desc'>Layouts that work with any platform, big or small.</p>
              </div>

              <div id='dynamic'>
                <i class="material-icons">offline_bolt</i>
                  <h3 id='secondary-header'>dynamic</h3>
                    <p id='icon-desc'>Interactive websites that come to life.</p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}


// <div id='bar-section'>
//   <h2 id='tech-abilities'>Technical Abilities</h2>
//     <div id='tech-bars'>
//       <h2 id='icon-bars'>Ruby/Rails</h2>
//       <ProgressBar animated now={50} />
//     <div>
//       <h2 id='bar-names'>JavaScript</h2>
//       <ProgressBar animated now={50} />
//     </div>
//     <div>
//       <h2 id='bar-names'>React</h2>
//       <ProgressBar animated now={50} />
//     </div>
//     <div>
//       <h2 id='bar-names'>HTML</h2>
//       <ProgressBar animated now={50} />
//     </div>
//     <div>
//       <h2 id='bar-names'>CSS</h2>
//       <ProgressBar animated now={50} />
//     </div>
//     <div>
//       <h2 id='bar-names'>Redux</h2>
//       <ProgressBar animated now={50} />
//     </div>
//     <div>
//       <h2 id='bar-names'>React-Hooks</h2>
//       <ProgressBar animated now={50} />
//     </div>
//     <div>
//       <h2 id='bar-names'>RESTful API</h2>
//       <ProgressBar animated now={50} />
//     </div>
//   </div>
// </div>

export default About;
