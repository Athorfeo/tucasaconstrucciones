import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { FiInstagram } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";

import './Footer.css';
import logo from '../../res/drawable/logo-text-white.svg';

function Footer() {
  return (
    <div className="footer mt-5 pb-5">
      <Container>
        <Row>

        </Row>

        <Row className="d-flex flex-column flex-sm-row-reverse justify-content-end ">
        <div className="d-flex mt-5 pt-4">
          <a href="https://www.facebook.com/TUCASA-CONSTRUCCIONES-105314684770792/" target="_blank" rel="noreferrer"><GrFacebookOption className="me-2" size={30}/></a>
          <a href="https://www.instagram.com/tucasa_construcciones/" target="_blank" rel="noreferrer"><FiInstagram className="me-2" size={30}/></a>
        </div>

        <div className="d-flex flex-column w-100 mt-5">
          <img src={logo} width="200" height="100" alt="logo" />
          <p>
            ¡Construimos sueños! Mi casa, tu casa. <br/>
            © 2021 | Desarrollado por <a href="https://www.facebook.com/TUCASA-CONSTRUCCIONES-105314684770792/" target="_blank" rel="noreferrer">@Athorfeo</a>
            </p>
          <p></p>
        </div>
        </Row>

        <Row>
          <div className="d-flex flex-row fs-6 pt-3 border-top">
            © 2021 <a href="https://www.facebook.com/TUCASA-CONSTRUCCIONES-105314684770792/" target="_blank" rel="noreferrer" className="ps-2 text-decoration-none">@Athorfeo</a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
