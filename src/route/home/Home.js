import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from '../../component/navigation/Navigation';

import ImgHomeHouse from '../../res/image/img-home-house.jpg';
import HomeFooter from './HomeFooter';

function Home() {

  return (
    <div className="bg-img vh-100" style={{ backgroundImage: `url(${ImgHomeHouse})` }}>
      <Navigation isOnPrimary={true} />

      <Container className="mt-5">
          <Row>
            <Col sm={6} className="text-white mt-5">
              <div className="w-50 bg-white p-1 mb-4"></div>
              <h1 className="display-1 fw-bold">¡Construimos sueños!</h1>
              <div className="w-50 bg-white p-1 float-end mt-4"></div>
            </Col>
          </Row>
        </Container>

      <HomeFooter />
    </div>
  );
}

export default Home;
