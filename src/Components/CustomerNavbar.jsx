import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CustomerNavbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import  {animateScroll as scroll } from "react-scroll";
class CustomerNavbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand>Henry Juuko Profilo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar">
          <Nav className='ml-auto'>
            <Nav.Link href='/' to="aboutUs">
              About me
          </Nav.Link>
          
          <Nav.Link href='/about' to='posts'>
             Personal Projects
          </Nav.Link>
            <Nav.Link href='/about' to='posts'>
              Resume
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default CustomerNavbar;
