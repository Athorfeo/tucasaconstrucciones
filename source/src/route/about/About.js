import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useTranslation } from 'react-i18next';

import Navigation from '../../component/navigation/Navigation';
import rawData from '../../res/data/projects.json';

function About() {
  const { t } = useTranslation();

  const loadedData = JSON.stringify(rawData);
  const data = JSON.parse(loadedData);

  return (
    <div>
      <Navigation isOnPrimary={false} />

      <Container>
        <Row>
          <Col className="">
            <h1 className="display-1 mt-5">{t('about.title')}</h1>
            <h2 className="mt-2">{t('about.subtitle')}</h2>
          </Col>
        </Row>

        <Row className="d-flex mt-4 mt-md-5">
          <Col className="d-flex align-items-center p-4 p-md-5 border-dark border-top border-end">
            <span className="me-4 me-md-3">{t('about.location')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {t('about.locationValue')}
            </span>
          </Col>
          <Col className="d-flex align-items-center p-4 p-md-5 border-dark border-top border-end">
            <span className="me-4 me-md-3">{t('about.phone')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {t('about.phoneValue')}
            </span>
          </Col>
          <Col className="d-flex align-items-center p-4 p-sm-5 border-dark border-top">
            <span className="me-4 me-sm-3">{t('about.email')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {t('about.emailValue')}
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
