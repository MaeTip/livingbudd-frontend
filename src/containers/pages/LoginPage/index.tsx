import React from 'react';
import { Form, Input, Button } from 'antd';

import { object, string, TypeOf } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { useLoginUserMutation } from "../../../redux/api/auth.api";

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
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }
  } = useForm()


  const [loginUser, { isLoading, isError, error, isSuccess }] = useLoginUserMutation();

  const onFinish = (values: any) => {
    loginUser(values)
  }

  return (
    <>
      <Form
        className="signin-form"
        onFinish={handleSubmit(onFinish)}
      >
        <Controller
          name="email"
          control={control}
          rules={{
            required: true
          }}
          render={({ field }) => (
            <Form.Item
              label="email"
              required
            >
              <Input
                {...field}
                autoFocus
              />
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
              label="password"
              required
            >
              <Input.Password
                {...field}
              />
            </Form.Item>
          )}
        />
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" block htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginPage
