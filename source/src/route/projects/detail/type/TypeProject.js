import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
  }
  return res;
}

function TypeProject(props) {
  const { t } = useTranslation();

  const imagesTypeList = props.type.images.map((item) =>
      <Carousel.Item key={item}>
        <img 
          className="d-block w-100" 
          src={require(`../../../../res/image/` + item).default} 
          alt="One"
        />
      </Carousel.Item>
  );

  const featuresTypeList = sliceIntoChunks(props.type.features, 2).map((row) => 
  <Row className="m">
    <Col className="d-flex align-items-center p-4 border-dark border-top border-end">
      <span className="me-3">{t(row[0].name)}</span>
      <span className="d-flex flex-fill justify-content-end fs-5 text-end">
        {t(row[0].value)}
      </span>
    </Col>
    <Col className="d-flex align-items-center p-4 border-dark border-top">
      <span className="me-3">{t(row[1].name)}</span>
      <span className="d-flex flex-fill justify-content-end fs-5 text-end">
        {t(row[1].value)}
      </span>
    </Col>
  </Row>
);

  return (
    <Row>
      <Col sm={6}>
        <h3 className="mt-2">{t('project.type') + ` ` + props.type.name}</h3>
        <p>{props.type.description}</p>
        {featuresTypeList}
      </Col>
      <Col sm={6}>
        <Carousel>
          {imagesTypeList}
        </Carousel>
      </Col>
    </Row>
  );
}

export default TypeProject;
