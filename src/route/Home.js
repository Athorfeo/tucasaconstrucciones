import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Navigation from '../component/Navigation';
import logo from '../res/drawable/logo-simple.svg';
import { BsArrowRightShort, BsInstagram, BsWhatsapp, BsGeoAlt } from "react-icons/bs";

import ImgHomeHouse from '../res/image/img-home-house.jpg';

function Home() {

  return (
    <div className="bg-img vh-100" style={{ backgroundImage: `url(${ImgHomeHouse})` }}>
      <Navigation />

      <Container className="mt-5">
          <Row>
            <Col sm={12} className="text-white mt-5">
              <h1 className="display-1 fw-bold text-center">¡Construimos sueños!</h1>
            </Col>
          </Row>
        </Container>

      <Container className="d-flex flex-column flex-md-row-reverse fixed-bottom mb-5 p-sm-0">
          <Link to="portfolio" className="d-flex align-items-center p-md-5 p-4 text-white text-decoration-none border">
            <div className="flex-fill me-1 fw-bold">
              VER PROYECTOS 
            </div>
            <BsArrowRightShort size={40} />
          </Link>

          <div className="d-none d-md-block text-white position-relative me-3 ms-3">
            <img src={ImgHomeHouse} className="h-100" width="250" alt="ImgHomeHouse" />
            <div className="d-flex position-absolute fixed-top align-items-end h-100">
              <div className="w-100 bg-dark bg-opacity-50">
                <div className="p-2 opacity-100">
                  Gran Reserva II
                </div>
              </div>
            </div>
          </div>

          <div className="d-none d-md-flex flex-column align-items-end justify-content-around pe-3 border-end text-white">
            <div className="">
              Calle 12 #23-12, Ocaña
              <BsGeoAlt className="ms-2" size={25} />
            </div>

            <div>
              +57 316 270 5465  
              <BsWhatsapp className="ms-2" size={25} />
            </div>

            <div>
              @tucasa_construcciones
              <BsInstagram className="ms-2" size={25} />
            </div>
          </div>
      </Container>
    </div>
  );
}

export default Home;
