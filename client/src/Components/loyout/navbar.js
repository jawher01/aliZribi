import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="contact"><Link to="/contact">contact</Link></Nav.Link>
      <Nav.Link href="about us"><Link to="/about">about us</Link></Nav.Link>
      <Nav.Link href="login">   <Link to="/login">login</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar></div>
  )
}

export default navbar