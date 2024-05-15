import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';

import './ItemProjects.css';
import FeatureItemProjects from './feature/FeatureItemProjects';
import { getProjectStatusText } from '../../../util/ProjectUtil';
import { useTranslation } from 'react-i18next';

function getStatusFeature(t, status){
  var mValue = getProjectStatusText(t, status);
  return {name:t("project.status"), value: mValue, status: status};
}

function ItemProjects(props) {
  const { t } = useTranslation();

  const featuresList = props.project.features.map((item) =>
      <FeatureItemProjects key={item.name} feature={{name: t(item.name), value: item.value}} />
  );

  const imageRoute = '../../../res/image/' + props.project.coverImage;
  console.log("ImageRoute: " + imageRoute)

  return (
    <Col lg={6} className="mt-5 p-0">
      <Link to={props.project.id} className="item-project">

        <div className="position-relative item-project-header ms-1">
          <img src={require('../../../res/image/' + props.project.coverImage)} className="w-100 h-100" alt="ImgHomeHouse" />

          <div className="d-flex position-absolute fixed-top align-items-end h-100">
            <div className="w-100 p-sm-5 p-3 bg-dark bg-opacity-25">
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
