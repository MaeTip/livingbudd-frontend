import { Button, Form, Input, InputNumber, Radio } from "antd";
import { Controller, useForm } from "react-hook-form";
import ErrorText from "components/ErrorText";
import { Gender, Vehicle } from "redux/dto/reservation.dto";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./index.styles";

interface FormProps {
  onFormSubmit: any;
  isLoading: boolean,
  isError: boolean
  error: any
}

const ReservationForm: FC<FormProps> = ({ onFormSubmit, isLoading, isError, error }) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <Wrapper>
      <Form
        className="reservation-form"
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
            <Form.Item required label={t("reservation.data.fullname")}>
              <Input {...field} autoFocus />
              {errors.fullname?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.data.fullname"),
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
            <Form.Item required label={t("reservation.data.phone")}>
              <Input {...field} />
              {errors.phone?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.data.phone"),
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
            <Form.Item label={t("reservation.data.email")}>
              <Input {...field} />
              {errors.email?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.data.email"),
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
          name="age"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.age")}>
              <InputNumber {...field} min={10} max={90} />
              {errors.age?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.data.age"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.gender")}>
              <Radio.Group {...field}>
                {Object.keys(Gender).map((option: string) => (
                  <Radio value={option} key={`gender-${option}`}>
                    {t(`reservation.data.option.gender.${option.toLowerCase()}`)}
                  </Radio>
                ))}
              </Radio.Group>
              {errors.age?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.data.gender"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="contact"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.contact")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="number_of_tenant"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.number_of_tenant")}>
              <InputNumber {...field} min={1} max={10} />
              {errors.age?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.data.number_of_tenant"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="has_pet"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.pet_required")}>
              <Radio.Group {...field}>
                <Radio value="true">
                  {t(`reservation.data.option.pet_required.yes`)}
                </Radio>
                <Radio value="false">
                  {t(`reservation.data.option.pet_required.no`)}
                </Radio>
              </Radio.Group>
              {errors.has_pet?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.data.pet_required"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="vehicle"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.vehicle")}>
              <Radio.Group {...field}>
                {Object.keys(Vehicle).map((name: string) => (
                  <Radio value={name} key={`vehicle-${name}`}>
                    {t(`reservation.data.option.vehicle.${name.toLowerCase()}`)}
                  </Radio>
                ))}
              </Radio.Group>
              {errors.age?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.data.vehicle"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="working_address"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.working_address")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="additional_request"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.additional_request")}>
              <Input.TextArea {...field} />
            </Form.Item>
          )}
        />
        <Form.Item
          wrapperCol={{ sm: { offset: 8, span: 8 }, md: { offset: 8, span: 6 } }}
        >
          <Button
            type="primary"
            block
            htmlType="submit"
            loading={isLoading}
            disabled={!isValid}
          >
            {t("reservation.form.submit")}
          </Button>
        </Form.Item>
        {isError && (
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

export default ReservationForm;