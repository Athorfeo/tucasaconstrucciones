import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import { BsArrowRightShort, BsInstagram, BsWhatsapp, BsGeoAlt } from "react-icons/bs";

import './FooterHome.css';
import ImgHome from '../../../res/image/img-home.jpg';

import { useTranslation } from 'react-i18next';

function HomeFooter() {
  const { t } = useTranslation();

  return (
    <Container className="d-flex flex-column flex-md-row-reverse fixed-bottom mb-5 p-sm-0">
          <Link to="projects" className="d-flex align-items-center p-md-5 p-4 text-white text-decoration-none border button-see-projects">
            <div className="flex-fill me-1 fw-bold text-uppercase">
              {t('see_proyects')}
            </div>
            <BsArrowRightShort size={40} />
          </Link>

          <div className="d-none d-md-flex flex-column align-items-end justify-content-around pe-3 border-end text-white">
            <div className="button-social-media p-2">
              {t('address_value')}
              <BsGeoAlt className="ms-2" size={25} />
            </div>

            <div className="button-social-media p-2">
              {t('phone_value')}
              <BsWhatsapp className="ms-2" size={25} />
            </div>

            <a href="https://www.instagram.com/tucasa_construcciones/" target="_blank" rel="noreferrer" className="button-social-media p-2">
              {t('instagram_value')}
              <BsInstagram className="ms-2" size={25} />
            </a>
          </div>
      </Container>
  );
}

export default HomeFooter;
