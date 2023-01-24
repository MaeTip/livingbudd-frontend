import { Button, Form, Input, InputNumber, Radio } from "antd";
import { Controller, useForm } from "react-hook-form";
import ErrorText from "components/ErrorText";
import {Gender, IReservation, Vehicle} from "redux/dto/reservation.dto";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./index.styles";

interface FormProps {
  onFormSubmit: any;
  isLoading: boolean,
  isError: boolean
  error: any,
  data?: IReservation
}

const ReservationForm: FC<FormProps> = ({ onFormSubmit, isLoading, isError, error, data }) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

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
          defaultValue={data?.fullname}
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
          defaultValue={data?.phone}
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
          defaultValue={data?.email}
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
          name="contact"
          control={control}
          defaultValue={data?.contact}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.contact")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="age"
          control={control}
          defaultValue={data?.age}
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
          defaultValue={data?.gender}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.gender")}>
              <Radio.Group {...field}>
                {Object.keys(Gender).map((option: string) => (
                  <Radio value={option} key={`gender-${option}`}>
                    {t(`reservation.data.option.gender.${option.toLowerCase()}`)}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          )}
        />
        <Controller
          name="air_conditioner_request"
          control={control}
          defaultValue={data?.air_conditioner_request}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.air_conditioner_request")}>
              <Radio.Group {...field}>
                {[true, false].map((option: boolean) => (
                  <Radio value={option} key={`air-conditioner-request-${option}`}>
                    {t(`common.option.yes_no.${option ? 'yes': 'no'}`)}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          )}
        />
        <Controller
          name="has_pet"
          control={control}
          defaultValue={data?.has_pet}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.pet_required")}>
              <Radio.Group {...field}>
                {[true, false].map((option: boolean) => (
                  <Radio value={option} key={`has-pet-${option}`}>
                    {t(`reservation.data.option.pet_required.${option ? 'yes': 'no'}`)}
                  </Radio>
                ))}
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
          defaultValue={data?.vehicle}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.vehicle")}>
              <Radio.Group {...field}>
                {Object.keys(Vehicle).map((name: string) => (
                  <Radio value={name} key={`vehicle-${name}`}>
                    {t(`reservation.data.option.vehicle.${name.toLowerCase()}`)}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          )}
        />
        <Controller
          name="number_of_tenant"
          control={control}
          defaultValue={data?.number_of_tenant || 1}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.number_of_tenant")}>
              <InputNumber {...field} min={1} max={10} />
            </Form.Item>
          )}
        />
        <Controller
          name="working_address"
          control={control}
          defaultValue={data?.working_address}
          render={({ field }) => (
            <Form.Item label={t("reservation.data.working_address")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="additional_request"
          control={control}
          defaultValue={data?.additional_request}
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
            { !data ? t("reservation.form.submit") : t("reservation.form.edit_submit")}
          </Button>
        </Form.Item>
        {(isError && error) && (
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
