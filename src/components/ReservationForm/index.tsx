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
            <Form.Item required label={t("reservation.form.fullname")}>
              <Input {...field} autoFocus />
              {errors.fullname?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.form.fullname"),
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
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          }}
          render={({ field }) => (
            <Form.Item required label={t("reservation.form.email")}>
              <Input {...field} />
              {errors.email?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.form.email"),
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
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("reservation.form.age")}>
              <InputNumber {...field} min={10} max={90} />
              {errors.age?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.form.age"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="gender"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("reservation.form.gender")}>
              <Radio.Group {...field}>
                {Object.keys(Gender).map((option: string) => (
                  <Radio value={option} key={`gender-${option}`}>
                    {t(`reservation.form.gender_option.${option.toLowerCase()}`)}
                  </Radio>
                ))}
              </Radio.Group>
              {errors.age?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.form.gender"),
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
            <Form.Item required label={t("reservation.form.phone")}>
              <Input {...field} />
              {errors.phone?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.form.phone"),
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
            <Form.Item label={t("reservation.form.contact")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="number_of_tenant"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("reservation.form.number_of_tenant")}>
              <InputNumber {...field} min={1} max={10} />
              {errors.age?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.form.number_of_tenant"),
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
            <Form.Item label={t("reservation.form.pet_required")}>
              <Radio.Group {...field}>
                <Radio value="true">
                  {t(`reservation.form.pet_required_option.yes`)}
                </Radio>
                <Radio value="false">
                  {t(`reservation.form.pet_required_option.no`)}
                </Radio>
              </Radio.Group>
              {errors.has_pet?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.form.pet_required"),
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
            <Form.Item label={t("reservation.form.vehicle")}>
              <Radio.Group {...field}>
                {Object.keys(Vehicle).map((name: string) => (
                  <Radio value={name} key={`vehicle-${name}`}>
                    {t(`reservation.form.vehicle_option.${name.toLowerCase()}`)}
                  </Radio>
                ))}
              </Radio.Group>
              {errors.age?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("reservation.form.vehicle"),
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
            <Form.Item label={t("reservation.form.working_address")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="additional_request"
          control={control}
          render={({ field }) => (
            <Form.Item label={t("reservation.form.additional_request")}>
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
