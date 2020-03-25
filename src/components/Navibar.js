import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

class Navibar extends React.Component{

  render(){
    return(
      <Navbar bg='dark' variant='dark' >
        <div id='navibar'>
            <a id='navlink-link' href="/about">About</a>
              <a id='navlink-link' href='/projects'>Projects</a>
                <a id='navlink-link' href='/blogs'>Blogs</a>
                  <a id='navlink-link' href='/contact'>Contact</a>
            </div>
      </Navbar>
    )
  }
}

export default Navibar;
