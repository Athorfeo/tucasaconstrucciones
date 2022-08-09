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

import './Project.css';

function getProject(projects, id) {
  return projects.find(item => item.id === id);
}

function Project() {
  window.scrollTo({top: 0, behavior: 'smooth'});

  let { id } = useParams();
  const { t } = useTranslation();
  const loadedData = JSON.stringify(rawData);
  const data = JSON.parse(loadedData);
  const project = getProject(data.projects, id);

  const projectImageList = project.images.map((item) =>
      <Carousel.Item key={item}>
        <img 
          className="d-block w-100" 
          src={require(`../../../res/image/` + item).default} 
          alt="One"
        />
      </Carousel.Item>
  );

  //Aptos | Tipologias
  var tipologiesSectionView = null;

  if(project.types.length > 0) {
    const tipologyListView = project.types.map((item) => 
      <Tab key={item.name} eventKey={item.name} title={t('project.type') + ` ` + item.name}>
        <TypeProject type={item} />
      </Tab>
    );

    tipologiesSectionView = <Container>
        <Row>
          <Col className="">
            <h2 className="fs-1 mt-5">{t('project.type_apartments')}</h2>
          </Col>
        </Row>

        <Row>
          <Tabs className="mt-2 mt-sm-5" id="uncontrolled-tab-example tipology-tab">
            {tipologyListView}
          </Tabs>
        </Row>
      </Container>;
  }

  var isSoldView = null;

  if(project.status == 1) {
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

  return (
    <div>
      <Navigation isOnPrimary={false} />

      <Container>
        <Row>
          <Col className="">
            <h1 className="display-1 mt-5">{project.name}</h1>
            <h2 className="mt-2">{project.category}</h2>
          </Col>
        </Row>

        <Row className="d-flex flex-sm-column flex-lg-row mt-4 mt-md-5">
          <Col className="d-flex align-items-center p-4 p-md-5 border-dark border-top border-end">
            <span className="me-4 me-md-3">{t('project.location')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {project.location}
            </span>
          </Col>
          <Col className="d-flex align-items-center p-4 p-md-5 border-dark border-top border-end">
            <span className="me-4 me-md-3">{t('project.deadline')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {project.deadline}
            </span>
          </Col>
          <Col className="d-flex align-items-center p-4 p-sm-5 border-dark border-top">
            <span className="me-4 me-sm-3">{t('project.city')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {project.city}
            </span>
          </Col>
        </Row>

        {isSoldView}

      </Container>

      <Carousel className="mt-3 mt-md-5">
        {projectImageList}
      </Carousel>

      {tipologiesSectionView}
      
      <Footer />
    </div>
  );
}

export default Project;
