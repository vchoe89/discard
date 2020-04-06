import React from 'react'
import Academia from '../images/academia.png'
import { Card, Button } from 'react-bootstrap';


const ProjectCard = () => {

  return(
    <div id='projects'>
      <h1 id='headlines'>Projects</h1>
      <div id='multipage-container'>
        <div id='project-cards'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Academia} />
            <Card.Body>
              <h2 className='card-title'>Academia</h2>
              <Card.Text>A simple to use web application that connects parents and tutors/coaches in their local areas</Card.Text>
            </Card.Body>
              <a id='button' href='https://www.google.com' target='_blank'className='btn btn-primary'>Git</a>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
