import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';

import './ItemProjects.css';

import ImgHomeHouse from '../../../res/image/img-home-house.jpg';
import FeatureItemProjects from './feature/FeatureItemProjects';

import { useTranslation } from 'react-i18next';

function getStatusFeature(t, status){
  var mValue = null;

  switch (status) {
    case 0:
      mValue = t('status.sale');
      break;

    case 1:
      mValue = t('status.sold');
      break;

    case 2:
      mValue = t('status.finalized');
      break;
  
    default:
      mValue = t('status.sale');
      break;
  }

  return {name:t("project.status"), value:mValue}
}

function ItemProjects(props) {
  const { t } = useTranslation();

  const featuresList = props.project.features.map((item) =>
      <FeatureItemProjects key={item.name} feature={{name:t(item.name), value:item.value}} />
  );

  return (
    <Col sm={6} className="mt-5 p-0">
      <Link to={props.project.id} className="item-project">

        <div className="position-relative item-project-header">
          <img src={ImgHomeHouse} className="w-100 h-100" alt="ImgHomeHouse" />

          <div className="d-flex position-absolute fixed-top align-items-end h-100">
            <div className="w-100 p-sm-5 p-3">
              <div className="fs-1">
                {props.project.name}
              </div>

              <div className="fs-4">
                {props.project.location}
              </div>
            </div>
          </div>
        </div>
        
        <div className="item-project-body">
          <FeatureItemProjects feature={getStatusFeature(t, props.project.status)}/>
          {featuresList}
        </div>
      </Link>
    </Col>
  );
}

export default ItemProjects;
