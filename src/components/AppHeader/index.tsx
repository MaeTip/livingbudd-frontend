import { Col, Row } from "antd";
import AppLogoWithText from "../AppLogoWithText";
import {HeaderWrapper} from "./index.styles";

const AppHeader = () => {
  return (
    <HeaderWrapper style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      <Row>
        <Col xs={{ span: 8 }} lg={{ span: 2 }}>
          <AppLogoWithText/>
        </Col>
      </Row>
    </HeaderWrapper>
  );
};

export default AppHeader;
