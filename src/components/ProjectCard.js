import React from 'react'
import Academia from '../images/academia.png'
import { Card } from 'react-bootstrap';


const ProjectCard = () => {

  return(
    <div id='projects'>
      <h1 id='headlines'>Projects</h1>
      <div id='multipage-container'>
        <div id='project-cards'>
          <Card>
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

export default ProjectCard;
