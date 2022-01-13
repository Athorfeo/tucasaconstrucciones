import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';

import './ItemProject.css';

import ImgHomeHouse from '../../../res/image/img-home-house.jpg';
import FeatureItemProject from './feature/FeatureItemProject';

function ItemProject() {
  return (
    <Col sm={6} className="mt-5 p-0">
      <Link to="portfolio" className="item-project">

        <div className="position-relative item-project-header">
          <img src={ImgHomeHouse} className="w-100 h-100" alt="ImgHomeHouse" />

          <div className="d-flex position-absolute fixed-top align-items-end h-100">
            <div className="w-100 p-sm-5 p-3">
              <div className="fs-1">
                Gran Reserva II
              </div>

              <div className="fs-4">
                Desde $124.000.000
              </div>
            </div>
          </div>
        </div>
        
        <div className="item-project-body">
          <FeatureItemProject />
          <FeatureItemProject />
          <FeatureItemProject />
        </div>
      </Link>
    </Col>
  );
}

export default ItemProject;