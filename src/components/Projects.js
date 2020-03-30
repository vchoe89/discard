import React from 'react';
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import ProjectCard from './ProjectCard.js'
import Academia from '../images/academia.png'


class Projects extends React.Component{
  render(){
    return(
      <div id='projects'>
        <h1 id='headlines'>Projects</h1>
        <div id='multipage-container'>
          <div id='project-cards'>
            <Card border='dark' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Academia} />
              <Card.Body>
                <h3 className='card-title'>Academia</h3>
                <Card.Text>Some text here</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    )
  }
}

export default Projects;
