import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FeatureItemProjects(props) {
  var mValue = null;

  switch (props.feature.status) {
    case 0:
      mValue = <span className="text-success fw-bold">{props.feature.value}</span>
      break;

    case 1:
      mValue = <span className="text-danger fw-bold">{props.feature.value}</span>
      break;

    default:
      mValue = props.feature.value;
      break;
  }

  return (
    <Row className="mx-4 my-2 p-2 border-bottom border-dark">
      <Col xs={6}>{props.feature.name}</Col>
      <Col xs={6} className="text-end ">{mValue}</Col>
    </Row>
  );
}

export default FeatureItemProjects;
