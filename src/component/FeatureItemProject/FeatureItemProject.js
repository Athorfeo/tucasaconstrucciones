import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FeatureItemProject() {
  return (
    <Row className="mx-4 my-2 p-2 border-bottom border-dark">
      <Col xs={8}>Estado</Col>
      <Col xs={4} className="text-end">En venta</Col>
    </Row>
  );
}

export default FeatureItemProject;
