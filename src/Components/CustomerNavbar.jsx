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
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Navbar.Brand>SoftWare Enginneering Blog</Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link href='/' to="aboutUs">
          
            About me
          </Nav.Link>
          <Nav.Link href='/news' to="gallery">
          Posts
          </Nav.Link>
          <Nav.Link  href='/about' to='posts'>
            Gallery
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
export default CustomerNavbar;
