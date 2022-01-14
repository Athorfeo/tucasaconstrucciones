import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FeatureItemProjects(props) {
  return (
    <Row className="mx-4 my-2 p-2 border-bottom border-dark">
      <Col xs={6}>{props.feature.name}</Col>
      <Col xs={6} className="text-end">{props.feature.value}</Col>
    </Row>
  );
}

export default FeatureItemProjects;
