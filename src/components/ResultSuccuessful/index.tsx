import React from "react";
import { Result } from "antd";

interface SuccessfulResultProps {
  className?: string;
  title: string;
  subtitle: string;
  extra?: React.ReactNode;
}

const SuccessfulResult: React.FC<SuccessfulResultProps> = ({
  className,
  title,
  subtitle,
  extra
}) => (
  <Result
    className={className}
    status="success"
    title={title}
    subTitle={subtitle}
    extra={extra}
  />
);

export default SuccessfulResult;
