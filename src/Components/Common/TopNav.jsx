import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "../../Assets/Common/TopNav.css"
import logo from "../../Assets/Images/logo.png"

function TopNav() {
  return (
    <Navbar className="navbar" expand="lg">
  <Container>
    <Navbar.Brand href="/">
      <img
        src={logo}
        width="70px"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "end"}}>
      <Nav >
        <Nav.Link href="#home" style={{color:"white", marginLeft: 5}}>Projects</Nav.Link>
        <Nav.Link href="/contact" style={{color:"white", marginLeft: 5}}>About Us</Nav.Link>
        <Nav.Link href="#home" style={{color:"white", marginLeft: 5}}>Home Loan</Nav.Link>
        <Nav.Link href="#link" style={{color:"white", marginLeft: 5}}>Blogs</Nav.Link>
        <Nav.Link href="#home" style={{color:"white", marginLeft: 5}}>Careers</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default TopNav