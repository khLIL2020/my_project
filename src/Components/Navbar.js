import React, {useState, useRef} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Container, NavDropdown} from 'react-bootstrap'
import Searched from './Searched'



function Bar()
{

    return (
<div>
<Navbar bg="light" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand href="/">My Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="/categorie/action">Action</NavDropdown.Item>
          <NavDropdown.Item href="/categorie/horreur"> Horreur</NavDropdown.Item>
          <NavDropdown.Item href="/categorie/culte">Culte</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/contact-us">About us</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>

 

</Navbar>
</div>


    );
}
export default Bar
