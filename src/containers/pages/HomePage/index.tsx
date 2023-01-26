import { Button, Col, Row, Typography } from "antd";
import { Wrapper } from "./index.styles";

const HomePage = () => {
  const { Title } = Typography;

  return (
    <Wrapper>
      <Row className={"home-container"}>
        <Col className="banner" span={24}>
          <Title className="banner-title">
            <span className="tenant">หาห้องพักถูกใจ</span>
            <span className="agent">ผู้เช่าตรงใจ</span>
          </Title>
          <Title className="achieve-rate" level={3}>
            <span>70% ได้ห้องพักใหม่ภายใน 1 สัปดาห์</span>
          </Title>
          <div className="cta-buttons">
            <Button type="primary" className={"cta-for-tenant"} size={"large"}>
              หาห้องพัก
            </Button>
            <Button type="primary" className={"cta-for-agent"} size={"large"}>
              หาคนเช่าห้องพัก
            </Button>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default HomePage;
