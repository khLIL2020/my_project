import React, {useState, useRef} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Container, NavDropdown} from 'react-bootstrap'
import SearchPage from './SearchPage';



function Bar()
{

    return (
<div>
<Navbar  bg="warning" variant="warning" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand href="/">My Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="/categorie/action">Action</NavDropdown.Item>
          <NavDropdown.Item href="/categorie/horreur"> Horreur</NavDropdown.Item>
          <NavDropdown.Item href="/categorie/culte">Culte</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact-us">About us</Nav.Link>
      </Nav>
    </Navbar.Collapse>


  </Container>

 

</Navbar>
</div>


    );
}
export default Bar
