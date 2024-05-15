import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { BsHouseFill, BsBagFill, BsInfoSquareFill } from "react-icons/bs";
import { FiFacebook, FiInstagram } from "react-icons/fi";

import './Navigation.css';
import logoWhite from '../../res/drawable/logo-text-white.svg';
import logoBlack from '../../res/drawable/logo-text-black.svg';

import { useTranslation } from 'react-i18next';

/**
 * 
 * <Nav.Link as={Link} to="/" replace className="item-navigation">
 * <BsInfoSquareFill className="me-2"/>
 * {t('aboutLabel')}
 * </Nav.Link>
 */

function Navigation(props) {
  const { t } = useTranslation();

  let logo = null;
  let theme = null;
  
  if(props.isOnPrimary){
    logo = logoWhite;
    theme = "navbar-dark"
  } else {
    logo = logoBlack;
    theme = "navbar-white"
  }

  return (
    <div>
      <Navbar className={"bg-transparent " + theme} expand={false}>
        <Container className="">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width="230" height="100" className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-white"/>
          <Navbar.Offcanvas className="" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={logoBlack} width="230" height="100" className="d-inline-block align-top" alt="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" replace className="item-navigation">
                  <BsHouseFill className="me-2"/>
                  {t('home')}
                  </Nav.Link>
                <Nav.Link as={Link} to="/projects" replace className="item-navigation">
                  <BsBagFill className="me-2"/>
                  {t('proyects')}
                </Nav.Link>
                <Nav.Link as={Link} to="/about" replace className="item-navigation">
                  <BsInfoSquareFill className="me-2"/>
                  {t('aboutLabel')}
                </Nav.Link>
              </Nav>

              <h4 className="text-center mt-5">{t('follow_us')}</h4>
              <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com/TUCASA-CONSTRUCCIONES-105314684770792/" target="_blank" rel="noreferrer"  className="text-dark"><FiFacebook className="me-2" size={30}/></a>
                <a href="https://www.instagram.com/tucasa_construcciones/" target="_blank" rel="noreferrer"  className="text-dark"><FiInstagram className="me-2" size={30}/></a>
              </div>
            </Offcanvas.Body>

          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
