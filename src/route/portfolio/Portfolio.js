import Navigation from '../../component/navigation/Navigation';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ImgHomeHouse from '../../res/image/img-home-house.jpg';
import ItemProject from '../../component/proyect/item/ItemProject';
import Footer from '../../component/footer/Footer';

import { BsArrowDown } from "react-icons/bs";

function Portfolio() {
  return (
    <div>
      <Navigation isOnPrimary={false} />

      <div className="bg-img text-white" style={{ backgroundImage: `url(${ImgHomeHouse})` }}>
        <Container className="pt-5 pb-5">
          <h1 className="display-1 mt-5 pt-5">Proyectos</h1>
        </Container>
      </div>

      <h2 className="text-center mt-5">
        Desliza hacia abajo <br />
        <BsArrowDown className="mt-2 border-top border-2 border-dark" size={30} />
      </h2>

      <p className="text-center mt-3 theme-text-primary">
        Presiona para ir al detalle
      </p>

      <Container>
          <Row>
            <ItemProject />
            <ItemProject />
          </Row>

          <Row>
            <ItemProject />
            <ItemProject />
          </Row>
        </Container>

        <Footer />
    </div>
  );
}

export default Portfolio;
