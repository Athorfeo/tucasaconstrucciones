import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Navigation from '../../component/navigation/Navigation';
import Footer from '../../component/footer/Footer';
import rawData from '../../res/data/projects.json';
import ImgProjects from '../../res/image/img-projects.jpg';

import { 
  BsHouseFill, 
  BsBagFill, 
  BsInfoSquareFill, 
  BsBullseye, 
  BsAwardFill, 
  BsBarChartFill, 
  BsBarChartSteps, 
  BsBoxes, 
  BsInfoCircle,
  BsShieldCheck,
  BsArrowRight
} from "react-icons/bs";

function About() {
  const { t } = useTranslation();

  const loadedData = JSON.stringify(rawData);
  const data = JSON.parse(loadedData);

  return (
    <div>
      <Navigation isOnPrimary={false} />

      <div className="bg-img text-white" style={{ backgroundImage: `url(${ImgProjects})` }}>
        <Container className="pt-5 pb-5">
          <h1 className="display-1 mt-5 pt-5">{t('about.title')}</h1>
        </Container>
      </div>

      <Container>
        <Row className="mt-5">
          <Col lg={6}>
            <h3 className="display-5 mb-5">
              <BsInfoCircle className="me-4"/>
              {t('about.content.us.title')}
            </h3>
          </Col>
          <Col lg={6}>
            <p>{t('about.content.us.paragraph-1')}</p>
            <p>{t('about.content.us.paragraph-2')}</p>
          </Col>
        </Row>

        <hr className='mt-5'></hr>

        <Row className="mt-5">
          <Col lg={6}>
            <h3 className="display-5 mb-5">
              <BsAwardFill className="me-4"/>
              {t('about.content.mission.title')}
            </h3>
          </Col>
          <Col lg={6}>
            <p>{t('about.content.mission.paragraph1')}</p>
            <p>{t('about.content.mission.paragraph2')}</p>
            
          </Col>
        </Row>

        <hr className='mt-5'></hr>

        <Row className="mt-5">
          <Col lg={6}>
            <h2 className="display-5 mb-5">
              <BsBoxes  className="me-4"/>
              {t('about.content.vision.title')}
            </h2>
            
          </Col>
          <Col lg={6}>
            <p>{t('about.content.vision.paragraph')}</p>
          </Col>
        </Row>

        <hr className='mt-5'></hr>

        <Row className="mt-5">
          <Col lg={6}>
            <h2 className="display-5 mb-3">
              <BsShieldCheck className="me-4 text-danger"/>
              {t('about.content.sst.title')}
            </h2>
            <p className="text-muted fs-6 mb-4">
              {t('about.content.sst.subtitle')}
            </p>
          </Col>
          <Col lg={6}>
            <p>{t('about.content.sst.paragraph1')}</p>
            <p>{t('about.content.sst.paragraph2')}</p>
            <div className="mt-4">
              <Button
                as={Link}
                to="/sst"
                variant="outline-danger"
                className="d-inline-flex align-items-center"
              >
                {t('about.content.sst.cta')}
                <BsArrowRight className="ms-2" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='theme-bg-white-secondary mt-5'>
        <Container className='d-flex flex-column pt-5 pb-5'>
          <h2 className="display-5">{t('project.contact')}</h2>

          <Row className="d-none d-md-flex flex-sm-column flex-lg-row mt-4 mt-md-5">
            <Col lg={6} className="d-flex align-items-center p-4 p-md-5 border-dark border-top border-bottom border-end">
              <span className="me-4 me-md-3">
                {t('about.phone')}
              </span>
              <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {t('about.phoneValue')}
              </span>
            </Col>
            <Col lg={6} className="d-flex align-items-center p-4 p-sm-5 border-dark border-top border-bottom">
              <span className="me-4 me-sm-3">
                {t('about.email')}
              </span>
              <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {t('about.emailValue')}
              </span>
            </Col>
          </Row>

          <Row className="d-flex d-md-none flex-sm-column flex-lg-row">
            <Col lg={6} className="d-flex flex-column border-dark border-bottom p-4">
              <span className="">
                {t('about.phone')}
              </span>
              <span className="d-flex flex-fill fs-6 text-end fw-bold">
                {t('about.phoneValue')}
              </span>
            </Col>
            <Col lg={6} className="d-flex flex-column border-dark p-4">
              <span className="">
                {t('about.email')}
              </span>
              <span className="d-flex flex-fill fs-6 text-end fw-bold">
                {t('about.emailValue')}
              </span>
            </Col>
          </Row>
        </Container>
      </Container>

      <Footer />
    </div>
  );
}

export default About;
