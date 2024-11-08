import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

import Navigation from '../../../component/navigation/Navigation';
import Footer from '../../../component/footer/Footer';
import TypeProject from './type/TypeProject';
import rawData from '../../../res/data/projects.json';

import { getAnalytics, logEvent } from "firebase/analytics";
import {APIProvider, Map, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';

import './Project.css';
import { useEffect } from 'react';

function getProject(projects, id) {
  return projects.find(item => item.id === id);
}

function Project() {
  const analytics = getAnalytics();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  //window.scrollTo({top: 0, behavior: 'smooth'});

  let { id } = useParams();
  const { t } = useTranslation();
  const loadedData = JSON.stringify(rawData);
  const data = JSON.parse(loadedData);
  const project = getProject(data.projects, id);
  
  const analyticsScreenName = project.name + 'Project';
  logEvent(analytics, 'screen_view', {
    firebase_screen: analyticsScreenName, 
    firebase_screen_class: 'ProjectJs'
  });

  //Project Images Section
  var projectImageList = [];
  project.images.forEach((item, index) => {
    let itemKey = `project-image-item-${index}`
    switch(item.type) { 
      case 1: { 
        projectImageList.push(
          <Carousel.Item key={itemKey}>
            <div className="iframe-container">
              <iframe 
                className="iframe-responsive" 
                src={item.value} 
                title="YouTube video player" 
                border="0px" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </Carousel.Item>
        );
        break; 
      }
      default: {
        projectImageList.push(
          <Carousel.Item key={itemKey}>
            <img 
              className="d-block w-100" 
              src={require(`../../../res/image/` + item.value)} 
              alt="One"
            />
          </Carousel.Item>
        );
        break; 
      }
    } 
  });

  //Project Description Section
  var descriptionsSectionView = null;
  if(project.types.length > 0) {

    var descriptionsView = project.descriptions.map((description, index) => {
      return <p key={`project-description-item-${index}`}>{description}</p>;
    });

    descriptionsSectionView = (
      <Container>
        <Row className="mt-5">
          <Col lg={6}>
            <h2 className="display-3 mb-5">{t('project.description')}</h2>
          </Col>
          <Col lg={6}>
            {descriptionsView}
          </Col>
        </Row>

        <hr className='mt-5'></hr>
      </Container>
    );
  }

  //Project Aptos | Tipologias Section
  var tipologiesSectionView = null;

  if(project.types.length > 0) {
    const tipologyListView = project.types.map((item, index) => 
      <Tab key={`project-tipology-item-${index}`} eventKey={item.name} title={t('project.type') + ` ` + item.name}>
        <TypeProject type={item} />
      </Tab>
    );

    tipologiesSectionView = <Container>
        <Row>
          <Col>
            <h2 className="display-3 mt-5">{t('project.type_apartments')}</h2>
          </Col>
        </Row>

        <Row>
          <Tabs className="mt-2 mt-sm-5" id="uncontrolled-tab-example tipology-tab">
            {tipologyListView}
          </Tabs>
        </Row>

        <hr className='mt-5'></hr>
      </Container>;
  }

  var isSoldView = null;

  if(project.status === 1) {
    isSoldView = <Alert variant="danger" className="mt-2 mt-lg-4">
      <Alert.Heading>El proyecto se ha vendido!</Alert.Heading>
        <p>
          Lastimosamente el proyecto se ha vendido completamente, pero no te procupes, tenemos más opciones para tí.
        </p>
        <hr />
        <Link to="/projects" className="item-project">
          <Button variant="danger">Ver otros proyectos</Button>{' '}
        </Link>
      </Alert>;
  }

  //Project | Location Maps Section
  var locationMapsSectionView = null;
  locationMapsSectionView = (
    <Container>
      <Row className='mt-5'>
        <Col>
          <h2 className="display-3 mb-5">{t('project.locationMaps')}</h2>
        </Col>
      </Row>
      <Row>
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
          <Map
            style={{width: '100%', height: '400px'}}
            defaultCenter={{lat: project.locationMaps.latitude, lng: project.locationMaps.longitude}}
            defaultZoom={18}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId="f7f9a973b8ff606e"
            >
              <AdvancedMarker position={{lat: project.locationMaps.latitude, lng: project.locationMaps.longitude}}>
              </AdvancedMarker>
          </Map>
        </APIProvider>
      </Row>
    </Container>
  );

  return (
    <div>
      <Navigation isOnPrimary={false} />

      <Container >
        <Row>
          <Col className="">
            <h1 className="display-1 mt-5">{project.name}</h1>
            <h2 className="mt-2">{project.category}</h2>
          </Col>
        </Row>

        <Row className="d-flex flex-sm-column flex-lg-row mt-4 mt-md-5">
          <Col lg={4} className="d-flex align-items-center p-4 p-md-5 border-dark border-top border-end">
            <span className="me-4 me-md-3">{t('project.location')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {project.location}
            </span>
          </Col>
          <Col lg={4} className="d-flex align-items-center p-4 p-md-5 border-dark border-top border-end">
            <span className="me-4 me-md-3">{t('project.deadline')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {project.deadline}
            </span>
          </Col>
          <Col lg={4} className="d-flex align-items-center p-4 p-sm-5 border-dark border-top">
            <span className="me-4 me-sm-3">{t('project.city')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {project.city}
            </span>
          </Col>
        </Row>

        {isSoldView}

      </Container>

      <Carousel interval={null} className="mt-3 mt-md-5">
        {projectImageList}
      </Carousel>

      {descriptionsSectionView}

      {tipologiesSectionView}

      {locationMapsSectionView}

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

export default Project;
