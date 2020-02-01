import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

class Navibar extends React.Component{

  render(){
    return(
      <Navbar >
        <div id='navibar'>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            </div>
      </Navbar>
    )
  }
}

export default Navibar;
