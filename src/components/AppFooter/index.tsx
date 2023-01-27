import { FC } from "react";
import { Col, Row } from "antd";
import { Layout } from "antd";
import AppLogoWithText from "../AppLogoWithText";
import { Wrapper } from "./index.styles";

interface AppFooterProps {
  className?: string;
}

const AppFooter: FC<AppFooterProps> = ({ className }) => {
  const { Footer } = Layout;

  return (
    <Footer>
      <Wrapper className={`${className}`}>
        <Row>
          <Col xs={{ span: 2 }}>
            <AppLogoWithText />
          </Col>
        </Row>
      </Wrapper>
    </Footer>
  );
};

export default AppFooter;
