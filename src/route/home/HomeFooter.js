import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import { BsArrowRightShort, BsInstagram, BsWhatsapp, BsGeoAlt } from "react-icons/bs";

import './HomeFooter.css';
import ImgHomeHouse from '../../res/image/img-home-house.jpg';

function HomeFooter() {

  return (
    <Container className="d-flex flex-column flex-md-row-reverse fixed-bottom mb-5 p-sm-0">
          <Link to="portfolio" className="d-flex align-items-center p-md-5 p-4 text-white text-decoration-none border button-see-projects">
            <div className="flex-fill me-1 fw-bold">
              VER PROYECTOS 
            </div>
            <BsArrowRightShort size={40} />
          </Link>

          <Link to="portfolio" className="d-none d-md-block text-white position-relative me-3 ms-3">
            <img src={ImgHomeHouse} className="h-100" width="250" alt="ImgHomeHouse" />
            <div className="d-flex position-absolute fixed-top align-items-end h-100">
              <div className="w-100">
                <div className="p-3">
                  Gran Reserva II
                </div>
              </div>
            </div>
          </Link>

          <div className="d-none d-md-flex flex-column align-items-end justify-content-around pe-3 border-end text-white">
            <div className="button-social-media p-2">
              Calle 12 #23-12, Ocaña
              <BsGeoAlt className="ms-2" size={25} />
            </div>

            <div className="button-social-media p-2">
              +57 316 270 5465  
              <BsWhatsapp className="ms-2" size={25} />
            </div>

            <a href="https://www.instagram.com/tucasa_construcciones/" target="_blank" rel="noreferrer" className="button-social-media p-2">
              @tucasa_construcciones
              <BsInstagram className="ms-2" size={25} />
            </a>
          </div>
      </Container>
  );
}

export default HomeFooter;
