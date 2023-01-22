import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Row, Col, Button } from "antd";
import { useCreateReservationMutation } from "redux/api/reservation.api";
import { Wrapper } from "./index.styles";
import logo from "assets/livingbudd_logo.svg";
import { Typography } from "antd";
import ReservationForm from "components/ReservationForm";
import AppLogoWithText from "components/AppLogoWithText";
import SuccessfulResult from "components/ResultSuccuessful";
import { useTranslation } from "react-i18next";

const CreateReservationPage = () => {
  const { Title } = Typography;
  const { t } = useTranslation();

  const [createReservation, { isLoading, isError, error, isSuccess, reset }] =
    useCreateReservationMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("You successfully reserve the room", {
        position: "top-right",
      });
    }
    if (isError) {
      if (Array.isArray((error as any).data.message)) {
        toast.error("Submit failed, please check details below", {
          position: "top-right",
        });
      } else {
        toast.error((error as any).data.message, {
          position: "top-right",
        });
      }
    }
  }, [isLoading]);

  const onFinish = (values: any) => {
    createReservation(values);
  };

  const onReset = () => {
    reset();
  };

  return (
    <Wrapper>
      <div className="form-wrapper">
        <AppLogoWithText className={"logo-text"} />
        <img src={logo} className="logo" alt="logo" width={"200px"} />
        <Row>
          <Col md={{ span: 14 }} sm={{ span: 24 }}>
            {isSuccess ? (
              <div className="reservation-successful">
                <SuccessfulResult
                  className={"reservation-successful-inner"}
                  title={t("reservation.successful.title")}
                  subtitle={t("reservation.successful.description")}
                  extra={[
                    <Button
                      onClick={onReset}
                      key={"reservation_button"}
                    >
                      {t("reservation.successful.button")}
                    </Button>,
                  ]}
                />
              </div>
            ) : (
              <>
                <Row>
                  <Col md={{ offset: 4 }} sm={{ offset: 0 }}>
                    <Title>ลงทะเบียนจองห้องพัก</Title>
                  </Col>
                </Row>
                <ReservationForm
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

export default CreateReservationPage;
