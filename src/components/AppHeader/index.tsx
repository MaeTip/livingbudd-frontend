import { FC } from "react";
import { Col, Row } from "antd";
import AppLogoWithText from "../AppLogoWithText";
import { HeaderWrapper, Wrapper } from "./index.styles";
import { routes } from "constants/routers";
import { useNavigate } from "react-router-dom";

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
            <a className={"logo"} onClick={() => navigate(routes.homepage)}>
              <AppLogoWithText />
            </a>
          </Col>
        </Row>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default AppHeader;
