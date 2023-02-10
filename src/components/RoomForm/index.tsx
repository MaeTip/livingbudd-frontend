import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import { Controller, useForm } from "react-hook-form";
import ErrorText from "components/ErrorText";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { FormWrapper } from "./index.styles";
import { IRoom } from "redux/dto";
import InputNumberCurrency from "../atoms/InputNumberCurrency";
import InputNumberMonth from "../atoms/InputNumberMonth";
import InputNumberRoom from "../atoms/InputNumberRoom";
import InputNumberSize from "../atoms/InputNumberSize";

interface FormProps {
  onFormSubmit: (value: any) => void;
  isLoading: boolean;
  data?: IRoom;
}

const RoomForm: FC<FormProps> = ({ onFormSubmit, isLoading, data }) => {
  const { t } = useTranslation();
  const { TextArea } = Input;
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  return (
    <FormWrapper>
      <Form
        className="room-form"
        onFinish={handleSubmit(onFormSubmit)}
        size="large"
        labelWrap
        labelCol={{ span: 7 }}
        wrapperCol={{ sm: { span: 24 }, md: { span: 17 } }}
      >
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue={data?.name}
          render={({ field }) => (
            <Form.Item required label={t("room.data.name")}>
              <Input {...field} autoFocus />
              {errors.name?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room.data.name"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="address"
          control={control}
          defaultValue={data?.address}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("room.data.address")}>
              <TextArea rows={3} {...field} />
              {errors.address?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room.data.address"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="google_map"
          control={control}
          defaultValue={data?.google_map}
          render={({ field }) => (
            <Form.Item label={t("room.data.google_map")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="building"
          control={control}
          defaultValue={data?.building}
          render={({ field }) => (
            <Form.Item label={t("room.data.building")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="floor"
          control={control}
          defaultValue={data?.floor}
          render={({ field }) => (
            <Form.Item label={t("room.data.floor")}>
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="size"
          control={control}
          defaultValue={data?.size}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("room.data.size")}>
              <InputNumberSize field={field} />
              {errors.size?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room.data.size"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="number_of_bedroom"
          control={control}
          defaultValue={data?.number_of_bedroom}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("room.data.number_of_bedroom")}>
              <InputNumberRoom field={field} />
              {errors.number_of_bedroom?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room.data.number_of_bedroom"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="number_of_bathroom"
          control={control}
          defaultValue={data?.number_of_bathroom}
          render={({ field }) => (
            <Form.Item label={t("room.data.number_of_bathroom")}>
              <InputNumberRoom field={field} />
            </Form.Item>
          )}
        />
        <Controller
          name="maintenance_fee"
          control={control}
          defaultValue={data?.maintenance_fee}
          render={({ field }) => (
            <Form.Item label={t("room.data.maintenance_fee")}>
              <InputNumberCurrency field={field} />
            </Form.Item>
          )}
        />
        <Controller
          name="detail"
          control={control}
          defaultValue={data?.detail}
          render={({ field }) => (
            <Form.Item label={t("room.data.detail")}>
              <TextArea {...field} rows={3} />
            </Form.Item>
          )}
        />
        <Controller
          name="nearby_area"
          control={control}
          defaultValue={data?.nearby_area}
          render={({ field }) => (
            <Form.Item label={t("room.data.nearby_area")}>
              <TextArea {...field} rows={3} />
            </Form.Item>
          )}
        />
        {/*amenities?: string;*/}
        {/*facilities?: string;*/}
        <Controller
          name="rental_price"
          control={control}
          defaultValue={data?.rental_price}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item required label={t("room.data.rental_price")}>
              <InputNumberCurrency field={field} />
              {errors.rental_price?.type === "required" && (
                <ErrorText
                  text={t("common.errors.required", {
                    name: t("room.data.rental_price"),
                  })}
                />
              )}
            </Form.Item>
          )}
        />
        <Controller
          name="rental_deposit"
          control={control}
          defaultValue={data?.rental_deposit}
          render={({ field }) => (
            <Form.Item label={t("room.data.rental_deposit")}>
              <InputNumberMonth field={field} />
            </Form.Item>
          )}
        />
        <Controller
          name="rental_advance_payment"
          control={control}
          defaultValue={data?.rental_advance_payment}
          render={({ field }) => (
            <Form.Item label={t("room.data.rental_advance_payment")}>
              <InputNumberMonth field={field} />
            </Form.Item>
          )}
        />
        <Controller
          name="is_created_by_owner"
          control={control}
          defaultValue={data?.is_created_by_owner}
          render={({ field: { onChange, value } }) => (
            <Form.Item label={t("room.data.is_created_by_owner")}>
              <Checkbox onChange={onChange} checked={value} />
            </Form.Item>
          )}
        />
        <Form.Item
          className="actions"
          wrapperCol={{
            sm: { span: 8 },
            md: { span: 6 },
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
              ? t("common.form.submit_button")
              : t("common.form.update_button")}
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default RoomForm;
