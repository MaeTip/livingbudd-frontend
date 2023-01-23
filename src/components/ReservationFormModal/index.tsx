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

const ReservationFormModal: FC<FormProps> = ({ onFormSubmit, isLoading, isError, error }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>

    </Wrapper>
  );
};

export default ReservationFormModal;
