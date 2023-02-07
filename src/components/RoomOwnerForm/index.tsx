import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import ErrorText from "components/ErrorText";
import { IRoomOwner } from "redux/dto";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./index.styles";

interface FormProps {
  onFormSubmit: SubmitHandler<FieldValues>;
  isLoading: boolean;
  isError: boolean;
  error: any;
  data?: IRoomOwner;
}

const RoomOwnerForm: FC<FormProps> = ({
  onFormSubmit,
  isLoading,
  isError,
  error,
  data,
}) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  return (
    <Wrapper>
      <Form
        className="room-owner-form"
        onFinish={handleSubmit(onFormSubmit)}
        size="large"
        colon={false}
        labelWrap
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14, sm: { span: 24 }, md: { span: 14 } }}
      >
        <Controller
          name="fullname"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue={data?.fullname}
          render={({ field }) => (
            <Form.Item required label={t("room_owner.data.fullname")}>
              <Input {...field} autoFocus />
              {errors.fullname?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room_owner.data.fullname"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue={data?.phone}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("room_owner.data.phone")}>
              <Input {...field} />
              {errors.phone?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room_owner.data.phone"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue={data?.email}
          rules={{
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          }}
          render={({ field }) => (
            <Form.Item label={t("room_owner.data.email")}>
              <Input {...field} />
              {errors.email?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room_owner.data.email"),
                  })}
                />
              )}
              {errors.email?.type === "pattern" && (
                <ErrorText text={t("common.errors.email_pattern")} />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="contact"
          control={control}
          defaultValue={data?.contact}
          render={({ field }) => (
            <Form.Item label={t("room_owner.data.contact")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="room_price"
          control={control}
          defaultValue={data?.room_price}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("room_owner.data.room_price")}>
              <InputNumber {...field} step="500" />
              {errors.room_price?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room_owner.data.room_price"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="room_location"
          control={control}
          defaultValue={data?.room_location}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("room_owner.data.room_location")}>
              <Input {...field} />
              {errors.room_location?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room_owner.data.room_location"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="room_detail"
          control={control}
          defaultValue={data?.room_detail}
          render={({ field }) => (
            <Form.Item label={t("room_owner.data.room_detail")}>
              <Input.TextArea {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="room_condition"
          control={control}
          defaultValue={data?.room_condition}
          render={({ field }) => (
            <Form.Item label={t("room_owner.data.room_condition")}>
              <Input.TextArea {...field} />
            </Form.Item>
          )}
        />
        {data && (
          <>
            <Controller
              name="admin_comment"
              control={control}
              defaultValue={data?.admin_comment}
              render={({ field }) => (
                <Form.Item label={t("room_owner.data.admin_comment")}>
                  <Input.TextArea {...field} />
                </Form.Item>
              )}
            />
            <Controller
              name="is_mark_as_read"
              control={control}
              defaultValue={data.is_mark_as_read}
              render={({ field: { onChange, onBlur, value } }) => (
                <Form.Item label={t("room_owner.data.is_mark_as_read")}>
                  <Checkbox
                    onChange={onChange} // send value to hook form
                    checked={value}
                  />
                </Form.Item>
              )}
            />
          </>
        )}
        <Form.Item
          wrapperCol={{
            sm: { offset: 8, span: 8 },
            md: { offset: 8, span: 6 },
          }}
        >
          <Button
            type="primary"
            block
            htmlType="submit"
            loading={isLoading}
            disabled={!isValid}
          >
            {!data
              ? t("room_owner.form.submit")
              : t("room_owner.form.edit_submit")}
          </Button>
        </Form.Item>
        {isError && error && (
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            {(error as any)?.data?.message.map((message: any, key: any) => (
              <ErrorText text={message} key={`error-${key}`} />
            ))}
          </Form.Item>
        )}
      </Form>
    </Wrapper>
  );
};

export default RoomOwnerForm;
