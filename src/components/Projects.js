import React from 'react';
import { Card } from 'react-bootstrap';
import Academia from '../images/academia.png'

class Projects extends React.Component{
  render(){
    return(
      <div>
        <h1 id='headlines'>Projects</h1>
          <Card>
            <Card.Img variant="top" src={Academia} />
          </Card>
      </div>

    )
  }
}

export default Projects;
