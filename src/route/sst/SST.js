import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { getAnalytics, logEvent } from "firebase/analytics";

import Navigation from '../../component/navigation/Navigation';
import Footer from '../../component/footer/Footer';
import ImgProjects from '../../res/image/img-projects.jpg';
import './SST.css';

import {
  BsShieldCheck,
  BsBullseye,
  BsSignpost2Fill,
  BsPeopleFill,
  BsShieldLockFill,
  BsHeartFill,
  BsBriefcaseFill,
  BsSlashCircleFill,
  BsClockHistory,
  BsCheckCircleFill,
  BsArrowLeft,
  BsEnvelopeFill,
  BsFileEarmarkCheckFill
} from "react-icons/bs";

const POLICY_ICONS = {
  sst_general: <BsShieldCheck />,
  sst_objectives: <BsBullseye />,
  sst_vial: <BsSignpost2Fill />,
  sst_acoso_laboral: <BsPeopleFill />,
  sst_acoso_sexual: <BsShieldLockFill />,
  sst_igualdad: <BsHeartFill />,
  sst_anticorrupcion: <BsBriefcaseFill />,
  sst_sustancias: <BsSlashCircleFill />,
  sst_desconexion: <BsClockHistory />
};

function SST() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  try {
    const analytics = getAnalytics();
    logEvent(analytics, 'screen_view', {
      firebase_screen: 'SST',
      firebase_screen_class: 'SSTJs'
    });
  } catch (e) {
    // Analytics fallback if not initialized in test/offline
  }

  const policies = t('sst.policies', { returnObjects: true }) || [];

  return (
    <div className="sst-page">
      <Navigation isOnPrimary={false} />

      {/* Banner */}
      <div className="sst-header-banner" style={{ backgroundImage: `url(${ImgProjects})` }}>
        <div className="sst-banner-overlay text-white">
          <Container>
            <div className="mb-3">
              <Link to="/about" className="text-white text-decoration-none d-inline-flex align-items-center opacity-75">
                <BsArrowLeft className="me-2" />
                {t('sst.back_to_about')}
              </Link>
            </div>
            <span className="badge bg-light text-dark fw-bold mb-2 text-uppercase letter-spacing">
              {t('sst.comm_type')}
            </span>
            <h1 className="display-4 fw-bold">{t('sst.title')}</h1>
            <p className="lead mb-0 text-white-50">{t('sst.subtitle')}</p>
          </Container>
        </div>
      </div>

      {/* Official Board Meta Card */}
      <Container>
        <div className="sst-board-meta">
          <Row className="align-items-center">
            <Col lg={8} className="mb-3 mb-lg-0">
              <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                <span className="fw-bold text-dark fs-5">{t('sst.company')}</span>
                <span className="sst-code-badge">{t('sst.code_version')}</span>
              </div>
              <p className="text-muted mb-0">{t('sst.lead_intro')}</p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 p-2 px-3">
                <BsFileEarmarkCheckFill className="me-2" />
                {t('sst.validity_label')}: {t('sst.validity_value')}
              </span>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Policies Grid */}
      <Container className="mt-5 pt-3">
        <Row className="g-4">
          {Array.isArray(policies) && policies.map((policy) => {
            const icon = POLICY_ICONS[policy.id] || <BsShieldCheck />;
            return (
              <Col key={policy.id} lg={4} md={6}>
                <div className="sst-policy-card">
                  <div className="sst-card-header">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="sst-card-icon">{icon}</div>
                      <span className="sst-code-badge">{policy.code}</span>
                    </div>
                    <h5 className="fw-bold mb-0 text-dark" style={{ minHeight: '3rem' }}>
                      {policy.title}
                    </h5>
                  </div>

                  <div className="sst-card-body">
                    {policy.intro && (
                      <p className="text-muted small mb-3 fst-italic">
                        {policy.intro}
                      </p>
                    )}

                    <ul className="sst-list flex-grow-1">
                      {policy.items && policy.items.map((item, idx) => (
                        <li key={idx} className="sst-list-item">
                          <BsCheckCircleFill className="sst-item-bullet" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Special block for Confidential Channel if present */}
                    {policy.channel && (
                      <div className="sst-report-channel">
                        <div className="fw-bold text-danger d-flex align-items-center small mb-1">
                          <BsEnvelopeFill className="me-2" />
                          {policy.channel.title}
                        </div>
                        <a
                          href={`mailto:${policy.channel.email}`}
                          className="fw-bold text-dark text-break small text-decoration-none d-block mb-1"
                        >
                          {policy.channel.email}
                        </a>
                        <div className="text-muted" style={{ fontSize: '0.78rem' }}>
                          {policy.channel.direct}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Approval and Official Sign-off Box */}
        <div className="sst-approval-footer mt-5">
          <Row className="align-items-center">
            <Col md={8}>
              <div className="d-flex align-items-center mb-2">
                <BsFileEarmarkCheckFill className="text-danger fs-3 me-3" />
                <div>
                  <h6 className="mb-0 fw-bold">
                    {t('sst.approved_by_label')}: {t('sst.approver_name')}
                  </h6>
                  <small className="text-muted">{t('sst.approver_title')}</small>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <span className="badge bg-secondary bg-opacity-10 text-secondary p-2 px-3 fw-normal">
                {t('sst.format_label')} • {t('sst.validity_label')}: {t('sst.validity_value')}
              </span>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default SST;
