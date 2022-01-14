import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

import Navigation from '../../../component/navigation/Navigation';
import Footer from '../../../component/footer/Footer';
import rawData from '../../../res/data/projects.json';

function getProject(projects, id) {
  return projects.find(item => item.id === id);
}

function Project() {
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

  return (
    <div>
      <Navigation isOnPrimary={false} />

      <Container className="my-5">
        <Row>
          <Col className="mt-5 mb-5">
            <h1 className="display-1 mt-5">{project.name}</h1>
            <h2 className="mt-2">{project.category}</h2>
          </Col>
        </Row>


        <Row className="mt-5">
          <Col className="d-flex align-items-center p-5 border-dark border-top border-end">
            <span className="me-3">{t('project.location')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {project.location}
            </span>
          </Col>
          <Col className="d-flex align-items-center p-5 border-dark border-top border-end">
            <span className="me-3">{t('project.deadline')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {project.deadline}
            </span>
          </Col>
          <Col className="d-flex align-items-center p-5 border-dark border-top">
            <span className="me-3">{t('project.city')}</span>
            <span className="d-flex flex-fill justify-content-end fs-5 text-end">
              {project.city}
            </span>
          </Col>
        </Row>
      </Container>

      <Carousel className="mt-5">
        {projectImageList}
      </Carousel>

      <Footer />
    </div>
  );
}

export default Project;
