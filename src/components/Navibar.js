import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

class Navibar extends React.Component{

  render(){
    return(
      <Navbar >
        <div id='navibar'>
            <a id='navlink-link'>About</a>
              <a id='navlink-link'>Projects</a>
                <a id='navlink-link'>Blogs</a>
                  <a id='navlink-link'>Contact</a>
            </div>
      </Navbar>
    )
  }
}

export default Navibar;
