import { useEffect } from "react";
import { toast } from "react-toastify";
import { Row, Col } from "antd";
import { useCreateReservationMutation } from "redux/api/reservation.api";
import { Wrapper } from "./index.styles";
import logo from "assets/livingbudd_logo.svg";
import { Typography } from "antd";
import ReservationForm from "components/ReservationForm";

const CreateReservationPage = () => {
  const { Title } = Typography;

  const [createReservation, { isLoading, isError, error, isSuccess }] =
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

  return (
    <Wrapper>
      <div className="form-wrapper">
        <div className={"logo-text"}></div>
        <img src={logo} className="logo" alt="logo" width={"200px"} />
        <Row>
          <Col md={{ span: 14 }} sm={{ span: 24 }}>
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
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default CreateReservationPage;