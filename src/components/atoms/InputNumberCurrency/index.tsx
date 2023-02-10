import React, { FC } from "react";
import { InputNumber } from "antd";
import { useTranslation } from "react-i18next";
import { ComponentWrapper } from "./index.styles";
import { FieldValues, ControllerRenderProps } from "react-hook-form/dist/types";

interface IProps {
  field: ControllerRenderProps<FieldValues, any>;
}

const InputNumberCurrency: FC<IProps> = ({ field }) => {
  const { t } = useTranslation();

  return (
    <ComponentWrapper>
      <InputNumber
        {...field}
        step={500}
        min={0}
        addonAfter={t("common.data.unit.currency")}
        formatter={(value: string) =>
          value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
      />
    </ComponentWrapper>
  );
};

export default InputNumberCurrency;
