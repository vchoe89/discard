import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Navibar extends React.Component{

  render(){
    return(
      <div id='nav-bar'>
      <Navbar fixed='top' sticky='bottom'>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
      </Navbar>
      </div>
    )
  }
}

export default Navibar;
