import React from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/icons/richardlogo.webp";
import "./mynavbar.style.css";
const MyNavbar = () => {
    return (
        <div>
<Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home">
      <img className="logo" src={Logo} alt="Logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
      <Nav.Link className="nav-link" href="#about">About</Nav.Link>
      <Nav.Link className="nav-link" href="#skills">Skills</Nav.Link>
      <Nav.Link className="nav-link" href="#experience">Experience</Nav.Link>
      <Nav.Link className="nav-link" href="#projects">Projects</Nav.Link>
      <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
      

    </Nav>
    <Nav>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default MyNavbar;