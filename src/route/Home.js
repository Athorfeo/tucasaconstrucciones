import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from '../component/Navigation';
import logo from '../res/drawable/logo.svg';
import { BsArrowRightCircle } from "react-icons/bs";

function Home() {
  return (
    <div>
      <div className="bg-secondary vw-100 vh-100">
        <Navigation />

        <Container>
          <Row>
            <Col sm={6} className="bg-white">
              <h1>¡Construimos sueños!</h1>
              <h1>Mi casa, tu casa</h1>
            </Col>
            <Col sm={6} className="d-none d-md-block">
              <img src={logo} className="d-inline-block align-top" alt="logo" />
              </Col>
          </Row>
        </Container>

        <Container className="d-flex flex-row-reverse fixed-bottom mb-5">
          <div className="p-4 bd-highlight text-white border-start">PROYECTOS <BsArrowRightCircle size={50}/></div>
          <div className="p-4 bd-highlight text-white">Gran Reserva II</div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
