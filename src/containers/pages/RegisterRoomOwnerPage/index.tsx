import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Typography } from "antd";
import AppLogoWithText from "components/AppLogoWithText";
import SuccessfulResult from "components/ResultSuccuessful";
import RoomOwnerForm from "components/RoomOwnerForm";
import { useRegisterRoomOwnerMutation } from "redux/api/room-owner.api";
import { routes } from "constants/routers";
import { Wrapper } from "./index.styles";

const RegisterRoomOwnerPage = () => {
  const { Title } = Typography;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [registerRoomOwner, { isLoading, isError, error, isSuccess, reset }] =
    useRegisterRoomOwnerMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("You successfully register as a room owner");
    }
    if (isError) {
      if (Array.isArray((error as any).data.message)) {
        toast.error("Submit failed, please check details below");
      } else {
        toast.error((error as any).data.message);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const onFinish = (values: any) => {
    registerRoomOwner(values);
  };

  const onReset = () => {
    reset();
  };

  return (
    <Wrapper>
      <div className="form-wrapper">
        <a className={"logo-link"} onClick={() => navigate(routes.homepage)}>
          <AppLogoWithText className={"logo-text-only"} />
        </a>
        <a className={"logo-link"} onClick={() => navigate(routes.homepage)}>
          <AppLogoWithText
            className="logo"
            logoColor={"white"}
            textColor={"white"}
            logoHeight={"180px"}
            textVertical={true}
          />
        </a>
        <Row>
          <Col md={{ span: 14 }} sm={{ span: 24 }}>
            {isSuccess ? (
              <div className="successful-wrapper">
                <SuccessfulResult
                  className={"successful-inner"}
                  title={t("room_owner.successful.title")}
                  subtitle={t("room_owner.successful.description")}
                  extra={[
                    <Button onClick={onReset} key={"reservation_button"}>
                      {t("reservation.successful.button")}
                    </Button>,
                  ]}
                />
              </div>
            ) : (
              <>
                <Row>
                  <Col md={{ offset: 3 }} sm={{ offset: 0 }}>
                    <Title className="title">
                      {t("room_owner.form.title")}
                      <br />
                      <span className={"area-name"}>
                        {t("common.support_areas.nonthaburi")}
                      </span>
                    </Title>
                  </Col>
                </Row>
                <RoomOwnerForm
                  onFormSubmit={onFinish}
                  isLoading={isLoading}
                  isError={isError}
                  error={error}
                />
              </>
            )}
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default RegisterRoomOwnerPage;
