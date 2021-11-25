import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../res/drawable/logo.svg';

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="bg-primary">
          <Navbar.Brand as={Link} to="/"><img src={logo} className="App-logo" alt="logo" /> TUCASA | CONSTRUCCIONES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="portfolio">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="portfolio">Gran Reserva</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="portfolio">Gran Reserva II</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
