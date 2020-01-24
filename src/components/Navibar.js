import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Navibar extends React.Component{

  render(){
    return(
      <div id='nav-bar'>
      <Navbar fixed='top' bg="light" expand="lg" >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
      </Navbar>
      </div>
    )
  }
}

export default Navibar;
