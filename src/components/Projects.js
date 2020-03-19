import React from 'react';
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import Academia from '../images/academia.png'

class Projects extends React.Component{
  render(){
    return(
      <div>
        <h1 id='headlines'>Projects</h1>
        <a href='https://github.com/vchoe89/academia'>
          <Card>
            <Card.Img variant="top" src={Academia} />
          </Card>
        </a>

      </div>

    )
  }
}

export default Projects;
