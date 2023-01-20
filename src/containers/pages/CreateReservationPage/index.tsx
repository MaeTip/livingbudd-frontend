import { useEffect } from "react";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { ExclamationCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Row, Col, message } from "antd";
import { useCreateReservationMutation } from "redux/api/reservation.api";
import { Wrapper } from "./index.styles";
import logo from "assets/livingbudd_logo.svg";

const CreateReservationPage = () => {
  const [createReservation, { isLoading, isError, error, isSuccess }] =
    useCreateReservationMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      message.info(`You successfully logged in `);
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
        <Row align="middle">
          <Col span={24}>
            <img src={logo} className="logo" alt="logo" width={"200px"} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form
              layout={"vertical"}
              className="signin-form"
              onFinish={handleSubmit(onFinish)}
              size="large"
            >
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                }}
                render={({ field }) => (
                  <Form.Item required>
                    <Input
                      {...field}
                      autoFocus
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder={"Email"}
                    />
                    {errors.email?.type === "required" && (
                      <span className="form-error">
                        please enter your email
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="form-error">
                        please enter email format
                      </span>
                    )}
                  </Form.Item>
                )}
              />
              <Form.Item>
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  loading={isLoading}
                >
                  จอง
                </Button>
              </Form.Item>
              <Form.Item>
                {(error as any)?.data?.message.map((message: any) => (
                  <div className="ant-form-item-explain-error">
                    <ExclamationCircleOutlined
                      style={{
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    {message}
                  </div>
                ))}
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default CreateReservationPage;
