import { Col, Row } from "antd";
import AppLogoWithText from "../AppLogoWithText";
import { HeaderWrapper } from "./index.styles";
import { FC } from "react";

interface AppHeaderProps {
  className?: string;
}

const AppHeader: FC<AppHeaderProps> = ({ className }) => {
  return (
    <HeaderWrapper
      className={`${className}`}
      style={{ position: "sticky", top: 0, zIndex: 1, width: "100%", padding: '0 20px' }}
    >
      <Row>
        <Col xs={{ span: 8 }} lg={{ span: 2 }}>
          <AppLogoWithText />
        </Col>
      </Row>
    </HeaderWrapper>
  );
};

export default AppHeader;
