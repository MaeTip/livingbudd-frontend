import React, { useCallback, useState } from "react";
import { PageWrapper } from "./index.style";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography, Button, Modal } from "antd";
import RoomForm from "../../../../components/RoomForm";

const RoomListPage = () => {
  const { t } = useTranslation();
  const { Title } = Typography;

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const goToCreateRoomPage = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onCloseModel = () => {
    setIsOpenModal(false);
    setIsEditMode(false);
  };

  const onSubmit = () => {};

  return (
    <PageWrapper>
      <Title>{t("room.title")}</Title>
      <Row>
        <Col flex="auto">Show search option here</Col>
        <Col flex="100px" className="action">
          <Button type="primary" onClick={goToCreateRoomPage}>
            {t("common.action_button.create_button", { name: t("room.title") })}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>Show table here</Col>
      </Row>
      <Modal
        centered
        open={isOpenModal}
        onCancel={onCloseModel}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        keyboard={false}
        title={
          <Title level={2} style={{ marginTop: 0 }}>
            {t(`common.form.${isEditMode ? "edit" : "create"}_title`, {
              name: t("room.title"),
            })}
          </Title>
        }
      >
        <RoomForm onFormSubmit={onSubmit} isLoading={isLoading} />
      </Modal>
    </PageWrapper>
  );
};

export default RoomListPage;
