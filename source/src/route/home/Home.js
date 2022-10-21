import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from '../../component/navigation/Navigation';

import ImgHome from '../../res/image/img-home.jpg';
import FooterHome from './footer/FooterHome';

import { useTranslation } from 'react-i18next';

import { getAnalytics, logEvent } from "firebase/analytics";

function Home() {
  const analytics = getAnalytics();
  logEvent(analytics, 'page_title', 'Home');

  const { t } = useTranslation();

  return (
    <div className="bg-img vh-100" style={{ backgroundImage: `url(${ImgHome})` }}>
      <Navigation isOnPrimary={true} />

      <Container className="mt-5">
          <Row>
            <Col sm={6} className="text-white mt-5">
              <div className="w-50 bg-white p-1 mb-4"></div>
              <h1 className="display-1 fw-bold">{t('slogan')}</h1>
              <div className="w-50 bg-white p-1 float-end mt-4"></div>
            </Col>
          </Row>
        </Container>

      <FooterHome />
    </div>
  );
}

export default Home;
