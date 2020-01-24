import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Navibar extends React.Component{

  render(){
    return(
      <Navbar fixed='top' bg="light" expand="lg" >
        <Navbar.Collapse>
        <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navibar;
