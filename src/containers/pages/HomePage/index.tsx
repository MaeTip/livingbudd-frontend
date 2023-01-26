import React from "react";
import { Button, Col, Row, Typography } from "antd";
import RentalList from "components/RentalList";
import placeholderImage1 from "assets/images/home/room-placeholder-1.png";
import placeholderImage2 from "assets/images/home/room-placeholder-2.png";
import placeholderImage3 from "assets/images/home/room-placeholder-3.png";
import placeholderImage4 from "assets/images/home/room-placeholder-4.png";
import constructionImage from "assets/images/home/construction.svg";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./index.styles";
import ReactIconWithText from "../../../components/ReactIcon";
import { FaMale, FaFemale } from "react-icons/fa";
import { brandingColor } from "constants/color";

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
      <div className={"why-us"}>
        <Row className={"container"}>
          <Col span={24}>
            <div className="sub-title">
              <Title level={2}>{t("home.why_us_section.title")}</Title>
            </div>
            <Title level={3}>
              <em>70%</em>มีผู้เช่าภายใน 1 สัปดาห์
            </Title>
          </Col>
          <Col span={24}>
            <Row className="why-us-detail">
              <Col offset={6} span={6}>
                <Title level={4}>
                  ระบบจัดการข้อมูลการเช่าตั้งแต่เริ่มเช่าจนปิดการสัญญาเช่า
                </Title>
              </Col>
              <Col offset={3} span={6}>
                <Title level={4}>ลูกค้าที่ต้องการหาห้องพัก</Title>
                <div className='reservations'>
                  <ReactIconWithText
                    className={'reservation'}
                    icon={<FaMale />}
                    size={"100px"}
                    color={brandingColor.light.blue.primary}
                    border={false}
                    text={"60%"}
                  />
                  <ReactIconWithText
                    className={'reservation'}
                    icon={<FaFemale />}
                    size={"100px"}
                    color={brandingColor.light.pink.primary}
                    border={false}
                    text={"40%"}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <div className="construction">
            <img src={constructionImage} style={{ width: "300px" }} />
          </div>
        </Row>
      </div>
    </Wrapper>
  );
};

export default HomePage;
