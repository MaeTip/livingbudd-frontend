import { FC } from "react";
import { Col, Row } from "antd";
import AppLogoWithText from "../AppLogoWithText";
import { HeaderWrapper, Wrapper } from "./index.styles";

interface AppHeaderProps {
  className?: string;
}

const AppHeader: FC<AppHeaderProps> = ({ className }) => {
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
            <AppLogoWithText />
          </Col>
        </Row>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default AppHeader;
