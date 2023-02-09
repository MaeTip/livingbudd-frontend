import React from "react";
import { PageWrapper } from "./index.style";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography, Button } from "antd";

const RoomListPage = () => {
  const { t } = useTranslation();
  const { Title } = Typography;

  return (
    <PageWrapper>
      <Title>{t("room.title")}</Title>
      <Row>
        <Col flex="auto">Show search option here</Col>
        <Col flex="100px" className="action">
          <Button type="primary">Create New Room</Button>
        </Col>
      </Row>
      <Row>
        <Col>Show table here</Col>
      </Row>
    </PageWrapper>
  );
};

export default RoomListPage;
