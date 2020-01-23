import React from 'react'

class About extends React.Component{


  render(){
    return(
      <div>
        <h1 className='headlines'>About</h1>
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


      </div>
    )
  }
}

export default About;
