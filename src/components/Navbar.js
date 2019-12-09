import React from 'react'
import { Nav } from 'react-bootstrap';

class Navbar extends React.Component{

  render(){
    return(
      <Nav>
        <Nav.Item>
          <Nav.Link>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Blogs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }

}

export default Navbar;
