import type { FC } from "react";
import { Wrapper } from "./index.styles";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface ErrorTextProps {
  text: string;
}

const ErrorText: FC<ErrorTextProps> = ({ text }) => {
  return (
    <Wrapper className="error-text ant-form-item-explain-error">
      <ExclamationCircleOutlined
        style={{
          verticalAlign: "middle",
        }}
      />{" "}
      <span>{text}</span>
    </Wrapper>
  );
};

export default ErrorText;
