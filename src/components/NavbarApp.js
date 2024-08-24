import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logo.svg";
import Book from "./BookAppointment";
function NavbarApp() {
  return (
    <Navbar expand="lg" className="navbar-bg border-bottom">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>
            <Nav.Link href="#testimonial">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contacts</Nav.Link>
            <Book />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
