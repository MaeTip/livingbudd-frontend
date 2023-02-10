import React, { FC } from "react";
import { InputNumber } from "antd";
import { useTranslation } from "react-i18next";
import { ComponentWrapper } from "./index.styles";
import { FieldValues, ControllerRenderProps } from "react-hook-form/dist/types";

interface IProps {
  field: ControllerRenderProps<FieldValues, any>;
}

const InputNumberSize: FC<IProps> = ({ field }) => {
  const { t } = useTranslation();

  return (
    <ComponentWrapper>
      <InputNumber {...field} min={0} addonAfter={t("common.data.unit.size")} />
    </ComponentWrapper>
  );
};

export default InputNumberSize;
