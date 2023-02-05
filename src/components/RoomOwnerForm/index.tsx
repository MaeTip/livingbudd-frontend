import { Button, Form, Input, InputNumber, Radio } from "antd";
import { Controller, useForm } from "react-hook-form";
import ErrorText from "components/ErrorText";
import { Gender, IReservation, Vehicle } from "redux/dto/reservation.dto";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./index.styles";

interface FormProps {
  onFormSubmit: any;
  isLoading: boolean;
  isError: boolean;
  error: any;
  data?: IReservation;
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
          render={({ field }) => (
            <Form.Item label={t("room_owner.data.contact")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="room_price"
          control={control}
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
          render={({ field }) => (
            <Form.Item label={t("room_owner.data.room_detail")}>
              <Input.TextArea {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="room_condition"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("room_owner.data.room_condition")}>
              <Input.TextArea {...field} />
            </Form.Item>
          )}
        />
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
              ? t("reservation.form.submit")
              : t("reservation.form.edit_submit")}
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
