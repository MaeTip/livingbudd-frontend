import React, { FC } from "react";
import { Col, Row } from "antd";
import AppLogoWithText from "../AppLogoWithText";
import { HeaderWrapper, Wrapper } from "./index.styles";
import { routes } from "constants/routers";
import { useNavigate } from "react-router-dom";
import ReactIconWithText from "../ReactIcon";
import { AiOutlineUser } from "react-icons/ai";
import { brandingColor } from "constants/color";

interface AppHeaderProps {
  className?: string;
}

const AppHeader: FC<AppHeaderProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        padding: "0 20px",
      }}
    >
      <Wrapper className={`${className}`}>
        <Row>
          <Col xs={{ span: 8 }} lg={{ span: 2 }}>
            <a className={"link"} onClick={() => navigate(routes.homepage)}>
              <AppLogoWithText />
            </a>
          </Col>
          <Col xs={{ span: 16 }} lg={{ span: 22 }}>
            <Row justify="end">
              <Col flex="none">
                <a className="link" href={routes.registrationOption}>
                  <ReactIconWithText
                    icon={<AiOutlineUser />}
                    border={false}
                    size={"30"}
                    color={brandingColor.light.black.primary}
                    text={"สมัครสมาชิก"}
                  />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default AppHeader;
