import React from 'react'
import { Card } from 'react-bootstrap';
import Callback from '../images/callback-blog.png'
import Security from '../images/security-blog.png'

class Blogs extends React.Component{
  render(){
    return(
      <div>
      <h1 id='headlines'>Blogs</h1>
        <Card>
          <Card.Img variant='top' src={Callback} />
        </Card>
        <Card>
          <Card.Img variant='top' src={Security} />
        </Card>
      </div>
    )
  }
}

export default Blogs;
