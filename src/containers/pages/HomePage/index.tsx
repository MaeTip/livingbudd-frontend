import React from "react";
import { Button, Col, Row, Typography } from "antd";
import RentalList from "components/RentalList";
import placeholderImage1 from "assets/images/home/room-placeholder-1.png";
import placeholderImage2 from "assets/images/home/room-placeholder-2.png";
import placeholderImage3 from "assets/images/home/room-placeholder-3.png";
import placeholderImage4 from "assets/images/home/room-placeholder-4.png";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./index.styles";

const HomePage = () => {
  const { Title } = Typography;
  const { t } = useTranslation();
  const rentalList = [
    {
      image: placeholderImage1,
      title: "บ้านเอื้ออาทร ราชพฤกษ์",
      location: "ราชพฤกษ์ นนทบุรี",
      numberOfBedroom: 1,
      size: 33,
      isAirConditioner: true,
    },
    {
      image: placeholderImage2,
      title: "บ้านเอื้ออาทร ราชพฤกษ์",
      location: "ราชพฤกษ์ นนทบุรี",
      numberOfBedroom: 1,
      size: 33,
      isAirConditioner: true,
    },
    {
      image: placeholderImage3,
      title: "บ้านเอื้ออาทร ราชพฤกษ์",
      location: "ราชพฤกษ์ นนทบุรี",
      numberOfBedroom: 1,
      size: 33,
      isAirConditioner: true,
    },
    {
      image: placeholderImage4,
      title: "บ้านเอื้ออาทร ราชพฤกษ์",
      location: "ราชพฤกษ์ นนทบุรี",
      numberOfBedroom: 1,
      size: 33,
      isAirConditioner: true,
    },
  ];
  return (
    <Wrapper>
      <Row className={"container"}>
        <Col className="banner" span={24}>
          <Title className="banner-title">
            <span className="tenant">{t("home.hero_banner.tenant_moto")}</span>
            <span className="agent">{t("home.hero_banner.agent_moto")}</span>
          </Title>
          <Title className="achieve-rate" level={3}>
            <span>{t("home.hero_banner.success_rate_moto")} </span>
          </Title>
          <div className="cta-buttons">
            <Button type="primary" className={"cta-for-tenant"} size={"large"}>
              {t("home.hero_banner.cta_for_tenant_button")}
            </Button>
            <Button type="primary" className={"cta-for-agent"} size={"large"}>
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
      <Row className={"container why-us"}>

      </Row>
    </Wrapper>
  );
};

export default HomePage;
