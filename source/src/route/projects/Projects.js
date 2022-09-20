import Navigation from '../../component/navigation/Navigation';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ImgProjects from '../../res/image/img-projects.jpg';
import ItemProject from './item/ItemProjects';
import Footer from '../../component/footer/Footer';

import { BsArrowDown } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

import rawData from '../../res/data/projects.json';

function Projects() {
  const { t } = useTranslation();

  const loadedData = JSON.stringify(rawData);
  const data = JSON.parse(loadedData);

  var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const projectsByGroup = groupBy(data.projects, 'status');

  const availableProjectsView = projectsByGroup[0].map((item) =>
      <ItemProject key={item.id} project={item}></ItemProject>
  );

  const soldProjectsView = projectsByGroup[1].map((item) =>
      <ItemProject key={item.id} project={item}></ItemProject>
  );

  return (
    <div>
      <Navigation isOnPrimary={false} />

      <div className="bg-img text-white" style={{ backgroundImage: `url(${ImgProjects})` }}>
        <Container className="pt-5 pb-5">
          <h1 className="display-1 mt-5 pt-5">{t('proyects')}</h1>
        </Container>
      </div>

      <h2 className="text-center mt-5">
        {t('scroll_down')} <br />
        <BsArrowDown className="mt-2 border-top border-2 border-dark" size={30} />
      </h2>

      <p className="text-center mt-3 theme-text-primary">
        {t('press_for_detail')}
      </p>

      <Container>
          <h2 className="display-5">{t('available_projects')}</h2>
          <Row className='mb-4'>
            {availableProjectsView}
          </Row>
          <h2 className="mt-5 display-5">{t('sold_projects')}</h2>
          <Row>
            {soldProjectsView}
          </Row>
        </Container>

        <Footer />
    </div>
  );
}

export default Projects;
