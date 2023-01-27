import React from "react";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import ReactIconWithText from "components/ReactIcon";
import { FaMale, FaFemale } from "react-icons/fa";
import { Wrapper } from "./whyus.style";
import { brandingColor } from "constants/color";
import constructionImage from "assets/images/home/construction.svg";

const WhyUsContent = () => {
  const { Title } = Typography;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title level={3}>
        <span
          dangerouslySetInnerHTML={{
            __html: t("home.why_us_section.success_rate"),
          }}
        />
      </Title>
      <Row className="why-us-detail" gutter={[16, 24]}>
        <Col
          xs={{ span: 24 }}
          md={{ offset: 1, span: 9 }}
          lg={{ offset: 9, span: 6 }}
          xl={{ offset: 7, span: 6 }}
        >
          <Title level={4}>{t("home.why_us_section.description_2")}</Title>
          <div className="reservations">
            <ReactIconWithText
              className={"reservation"}
              icon={<FaMale />}
              size={"100px"}
              color={brandingColor.light.blue.primary}
              border={false}
              text={"60%"}
            />
            <ReactIconWithText
              className={"reservation"}
              icon={<FaFemale />}
              size={"100px"}
              color={brandingColor.light.pink.primary}
              border={false}
              text={"40%"}
            />
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ offset: 3, span: 10 }}
          lg={{ offset: 9, span: 14 }}
          xl={{ offset: 2, span: 8 }}
        >
          <Title level={4}>{t("home.why_us_section.description_1")}</Title>
        </Col>
        <div className="construction">
          <img
            src={constructionImage}
            style={{ width: "300px" }}
            alt="construction"
          />
        </div>
      </Row>
    </Wrapper>
  );
};

export default WhyUsContent;
