import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logoWhite from '../res/drawable/logo-text-white.svg';
import logoBlack from '../res/drawable/logo-text-black.svg';

function Navigation(props) {
  let logo = null;
  
  if(props.isOnPrimary){
    logo = logoWhite;
  } else {
    logo = logoBlack;
  }

  return (
    <div>
      <Navbar className="bg-transparent navbar-dark" expand={false}>
        <Container className="border-bottom">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width="230" height="100" className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-white"/>
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">TUCASA | CONSTRUCCIONES</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">Home</Nav.Link>

                <NavDropdown title="Portfolio" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item as={Link} to="portfolio">Gran Reserva</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="portfolio">Gran Reserva II</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="about">About</Nav.Link>
              </Nav>
            </Offcanvas.Body>

          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
