import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import RentalList from "components/RentalList";
import WhyUsContent from "./whyus";
import ServiceContent from "./service";
import { Wrapper } from "./index.styles";
import { rentalList } from "./rental.list";
import ReviewContent from "./review";
import { useNavigate } from "react-router-dom";
import { routes } from "constants/routers";

const HomePage = () => {
  const { Title } = Typography;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToReservationPage = () => {
    navigate(routes.reservation);
  };

  const goToRoomOwnerRegistration = () => {
    navigate(routes.roomOwnerRegistration);
  };

  return (
    <Wrapper>
      <Row className="container">
        <Col className="banner" span={24}>
          <Title className="banner-title">
            <span className="tenant">{t("home.hero_banner.tenant_moto")}</span>
            <span className="agent">{t("home.hero_banner.agent_moto")}</span>
          </Title>
          <Title className="achieve-rate" level={3}>
            <span>{t("home.hero_banner.success_rate_moto")} </span>
          </Title>
          <div className="cta-buttons">
            <Button
              type="primary"
              className={"cta-for-tenant"}
              size={"large"}
              onClick={goToReservationPage}
            >
              {t("home.hero_banner.cta_for_tenant_button")}
            </Button>
            <Button
              type="primary"
              className={"cta-for-agent"}
              size={"large"}
              onClick={goToRoomOwnerRegistration}
            >
              {t("home.hero_banner.cta_for_agent_button")}
            </Button>
          </div>
        </Col>
      </Row>

      <Row className={"container room-listing-container"}>
        <Col span={24}>
          <div className="sub-title">
            <Title level={2}>{t("home.rental_section.title")}</Title>
          </div>
          <RentalList list={rentalList} />
        </Col>
      </Row>

      <div className="why-us full-width">
        <Row className={"container"}>
          <Col span={24}>
            <div className="sub-title">
              <Title level={2}>{t("home.why_us_section.title")}</Title>
            </div>
          </Col>
          <Col span={24}>
            <WhyUsContent />
          </Col>
        </Row>
      </div>

      <Row className={"our-service container"}>
        <Col span={24}>
          <div className="sub-title">
            <Title level={2}>{t("home.service.title")}</Title>
          </div>
        </Col>
        <Col>
          <ServiceContent />
        </Col>
      </Row>

      <Row className={"our-review container"}>
        <Col span={24}>
          <div className="sub-title">
            <Title level={2}>{t("home.review.title")}</Title>
          </div>
        </Col>
        <Col>
          <ReviewContent />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default HomePage;
