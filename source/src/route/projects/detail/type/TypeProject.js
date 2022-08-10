import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

import { getProjectStatusText } from '../../../../util/ProjectUtil';

import './TypeProject.css';

function TypeProject(props) {
  const { t } = useTranslation();

  const descriptionsView = [];
  const imagesView = [];
  const featuresView = [];

  props.type.descriptions.forEach(description => {
    descriptionsView.push(<p>{description}</p>);
  });

  props.type.images.forEach(image => {
    imagesView.push(
      <Carousel.Item key={image}>
        <img 
          className="d-block w-100" 
          src={require(`../../../../res/image/` + image).default} 
          alt="One"
        />
      </Carousel.Item>
    );
  });

  props.type.features.forEach((feature, index) => {
    var value = '';

    switch (feature.name) {
      case 'project.status':
        var statusText = getProjectStatusText(t, feature.value );

        if(feature.value > 0){
          value = <span className="text-danger">{statusText}</span>;
        } else {
          value = statusText;
        }

        break;
      
      case 'project.built_area':
      case 'project.free_area':
        value = <span>{feature.value + 'm'}<sup>2</sup></span>;
        break;
    
      default:
        value = feature.value;
        break;
    }

    const nameView = <span className="me-3">{t(feature.name)}</span>;
    const valueView = <span className="d-flex flex-fill justify-content-end fs-5 text-end">
      {value}
    </span>;

    if((index % 2) === 0){
      featuresView.push(
        <Col sm={6} className="d-flex align-items-center p-4 border-dark border-bottom border-end">
          {nameView}
          {valueView}
        </Col>
      );
    } else {
      featuresView.push(
        <Col sm={6} className="d-flex align-items-center p-4 border-dark border-bottom">
          {nameView}
          {valueView}
        </Col>
      );
    }
  });

  return (
    <Row>
      <Col lg={6}>
        <h3 className="mt-2">{t('project.type') + ` ` + props.type.name}</h3>
        {descriptionsView}
        <Row>
          {featuresView}
        </Row>
      </Col>
      <Col lg={6}>
        <Carousel interval={null}>
          {imagesView}
        </Carousel>
      </Col>
    </Row>
  );
}

export default TypeProject;
