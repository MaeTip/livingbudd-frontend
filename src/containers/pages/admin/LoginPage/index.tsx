import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/store'
import { setToken } from "redux/slice/auth.slice";
import { useLoginUserMutation } from "redux/api/auth.api";
import { Wrapper } from "./index.styles";
import logo from "assets/logo/logo_black.svg"

const loginSchema = object({
  email: string()
    .min(1,'Email address is required')
    .email('Email Address is invalid'),
  password: string()
    .min(1,'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export type LoginInput = TypeOf<typeof loginSchema>;

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const from = ((location.state as any)?.from.pathname as string) || '/admin/dashboard';
  const [loginUser, { data: loginData, isLoading, isError, error, isSuccess }] = useLoginUserMutation();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    if (isSuccess) {
      message.info(`You successfully logged in `);
      dispatch(setToken({token: loginData?.access_token }))
      navigate(from);
    }
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: 'top-right',
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: 'top-right',
        });
      }
    }
  }, [isLoading]);

  const onFinish = (values: any) => {
    loginUser(values)
  }

  return (
    <Wrapper>
      <div className="form-wrapper">
        <Row align="middle">
          <Col span={24}>
            <img src={logo} className="logo" alt="logo" width={"200px"}/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form
              layout={'vertical'}
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
                    message: "Entered value does not match email format"
                  }
                }}
                render={({ field }) => (
                  <Form.Item
                    required
                  >
                    <Input
                      {...field}
                      autoFocus
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder={"Email"}
                    />
                    {errors.email?.type === 'required' && <span className="form-error">please enter your email</span>}
                    {errors.email?.type === 'pattern' && <span className="form-error">please enter email format</span>}
                  </Form.Item>
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: true
                }}
                render={({ field }) => (
                  <Form.Item
                    required
                  >
                    <Input.Password
                      {...field}
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder={"Password"}
                    />
                  </Form.Item>
                )}
              />
              <Form.Item>
                <Button type="primary" block htmlType="submit" loading={isLoading}>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Wrapper>
  )
}

export default LoginPage
