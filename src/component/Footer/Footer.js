import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FiInstagram } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";

import './Footer.css';
import logo from '../../res/drawable/logo.svg';

import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer mt-5 pb-5">
      <Container>
        <Row className="d-flex align-items-center theme-bg-white-third p-3">
          <Col>{t('connect_with_us')}</Col>
          <Col>
            <div className="d-flex justify-content-end">
              <a href="https://www.facebook.com/TUCASA-CONSTRUCCIONES-105314684770792/" target="_blank" rel="noreferrer"><GrFacebookOption className="me-2" size={30}/></a>
              <a href="https://www.instagram.com/tucasa_construcciones/" target="_blank" rel="noreferrer"><FiInstagram className="me-2" size={30}/></a>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="d-flex flex-row justify-content-center fs-6 p-3 theme-bg-white-secondary">
            {t('copyright_year')} 
            <a href="https://www.facebook.com/TUCASA-CONSTRUCCIONES-105314684770792/" target="_blank" rel="noreferrer" className="ps-1 text-decoration-none fw-bold">
              {t('developer_value')}
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
