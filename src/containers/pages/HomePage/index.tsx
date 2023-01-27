import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import RentalList from "components/RentalList";
import ReactIconWithText from "components/ReactIcon";
import { FaMale, FaFemale } from "react-icons/fa";
import { Wrapper } from "./index.styles";
import { brandingColor } from "constants/color";
import { rentalList } from "./rental.list";
import constructionImage from "assets/images/home/construction.svg";

const HomePage = () => {
  const { Title } = Typography;
  const { t } = useTranslation();

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

      {/*<div className={"why-us"}>*/}
      {/*  <Row className={"container"}>*/}
      {/*    <Col span={24}>*/}
      {/*      <div className="sub-title">*/}
      {/*        <Title level={2}>{t("home.why_us_section.title")}</Title>*/}
      {/*      </div>*/}
      {/*      <Title level={3}>*/}
      {/*        <span*/}
      {/*          dangerouslySetInnerHTML={{*/}
      {/*            __html: t("home.why_us_section.success_rate"),*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </Title>*/}
      {/*    </Col>*/}
      {/*    <Col span={24}>*/}
      {/*      <Row className="why-us-detail">*/}
      {/*        <Col offset={6} span={6}>*/}
      {/*          <Title level={4}>*/}
      {/*            {t("home.why_us_section.description_1")}*/}
      {/*          </Title>*/}
      {/*        </Col>*/}
      {/*        <Col offset={3} span={7}>*/}
      {/*          <Title level={4}>*/}
      {/*            {t("home.why_us_section.description_2")}*/}
      {/*          </Title>*/}
      {/*          <div className="reservations">*/}
      {/*            <ReactIconWithText*/}
      {/*              className={"reservation"}*/}
      {/*              icon={<FaMale />}*/}
      {/*              size={"100px"}*/}
      {/*              color={brandingColor.light.blue.primary}*/}
      {/*              border={false}*/}
      {/*              text={"60%"}*/}
      {/*            />*/}
      {/*            <ReactIconWithText*/}
      {/*              className={"reservation"}*/}
      {/*              icon={<FaFemale />}*/}
      {/*              size={"100px"}*/}
      {/*              color={brandingColor.light.pink.primary}*/}
      {/*              border={false}*/}
      {/*              text={"40%"}*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*        </Col>*/}
      {/*      </Row>*/}
      {/*    </Col>*/}
      {/*    <div className="construction">*/}
      {/*      <img*/}
      {/*        src={constructionImage}*/}
      {/*        style={{ width: "300px" }}*/}
      {/*        alt="construction"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </Row>*/}
      {/*</div>*/}
    </Wrapper>
  );
};

export default HomePage;
