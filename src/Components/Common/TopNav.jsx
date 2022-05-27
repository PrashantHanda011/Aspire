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
      <Nav style={{display: "flex", alignItems: "center"}}>
        <Nav.Link href="#home" style={{color:"white", marginLeft: 5}}>Projects</Nav.Link>
        <Nav.Link href="/contact" style={{color:"white", marginLeft: 5}}>About Us</Nav.Link>
        <Nav.Link href="#home" style={{color:"white", marginLeft: 5}}>Home Loan</Nav.Link>
        <Nav.Link href="/blogs" style={{color:"white", marginLeft: 5}}>Blogs</Nav.Link>
        <Nav.Link href="#home" style={{color:"white", marginLeft: 5}}>Careers</Nav.Link>
        <Nav.Link href="#home">
          <div style={{backgroundColor: "#F47E20", fontWeight: "600", borderRadius: "20px", padding: 10, color:"white"}}>Partners</div>
        </Nav.Link>
        <Nav.Link href="#home">
          <div style={{backgroundColor: "#F47E20", fontWeight: "600", borderRadius: "20px", padding: 10, color:"white"}}>Contact Us</div>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default TopNav