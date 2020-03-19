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
        <a href='https://medium.com/@vchoe89/javascript-callbacks-explained-d32020cd36f6'>
          <Card id='callback'>
            <Card.Img  variant='top' src={Callback} />
          </Card>
        </a>
        <a href='https://medium.com/@vchoe89/understanding-security-protocols-69e449f2361a'>
          <Card id='security'>
            <Card.Img  variant='top' src={Security} />
          </Card>
        </a>
      </CardDeck>
    </div>
    )
  }
}

export default Blogs;
