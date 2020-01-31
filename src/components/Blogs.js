import React from 'react'
import { Card, CardDeck } from 'react-bootstrap';
import Callback from '../images/callback-blog.png'
import Security from '../images/security-blog.png'

class Blogs extends React.Component{
  render(){
    return(
      <div>
      <h1 id='headlines'>Blogs</h1>
      <CardDeck>
        <Card id='callback'>
          <Card.Img  variant='top' src={Callback} />
        </Card>
        <Card id='security'>
          <Card.Img  variant='top' src={Security} />
        </Card>
      </CardDeck>
    </div>
    )
  }
}

export default Blogs;
