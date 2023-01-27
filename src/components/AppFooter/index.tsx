import React, { FC } from "react";
import { Col, Row, Layout, Typography } from "antd";
import { useTranslation } from "react-i18next";
import AppLogoWithText from "../AppLogoWithText";
import ReactIconWithText from "../ReactIcon";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import { brandingColor } from "constants/color";
import { contact } from "constants/contact";
import { Wrapper } from "./index.styles";

interface AppFooterProps {
  className?: string;
}

const AppFooter: FC<AppFooterProps> = ({ className }) => {
  const { Footer } = Layout;
  const { Text, Title } = Typography;
  const { t } = useTranslation();

  const mailto = `mailto: ${contact.email}`;
  const tel = `tel: ${contact.phone}`;

  return (
    <Footer>
      <Wrapper className={`${className}`}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24, order: 3 }}
            md={{ span: 8, order: 1 }}
            lg={{ span: 6 }}
            xl={{ span: 4 }}
          >
            <AppLogoWithText />
            <Text>{t("seo.description")}</Text>
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            md={{ span: 9, order: 2 }}
            lg={{ span: 12 }}
            xl={{ span: 16 }}
          >
            <div className="service-list">
              <Title level={5}>{t("seo.service.title")}</Title>
              <ul>
                <li>{t("seo.service.service_1")}</li>
                <li>{t("seo.service.service_2")}</li>
                <li>{t("seo.service.service_3")}</li>
                <li>{t("seo.service.service_4")}</li>
              </ul>
            </div>
          </Col>
          <Col
            xs={{ span: 24, order: 2 }}
            md={{ span: 7, order: 3 }}
            lg={{ span: 6 }}
            xl={{ span: 4 }}
          >
            <Title level={5}>{t("common.contact")}</Title>
            <div className="contact-us">
              <ReactIconWithText
                icon={<CgPhone />}
                border={false}
                size={"30"}
                color={brandingColor.light.black.primary}
                text={<a href={tel}>{contact.phone}</a>}
              />
              <ReactIconWithText
                icon={<MdOutlineAlternateEmail />}
                border={false}
                size={"30"}
                color={brandingColor.light.black.primary}
                text={<a href={mailto}>{contact.email}</a>}
              />
              <ReactIconWithText
                icon={<FaFacebook />}
                border={false}
                size={"30"}
                color={brandingColor.light.black.primary}
                text={
                  <a href={contact.facebookUrl} target="_blank">
                    {contact.facebookText}
                  </a>
                }
              />
            </div>
          </Col>
        </Row>
      </Wrapper>
    </Footer>
  );
};

export default AppFooter;
