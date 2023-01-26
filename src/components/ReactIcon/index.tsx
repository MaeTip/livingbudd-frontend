import React, { FC } from "react";
import { Wrapper } from "./index.styles";
import { IconContext } from "react-icons";
import { brandingColor } from "constants/color";
import { DefaultTFuncReturn } from "i18next";

interface ReactIconProps {
  icon: JSX.Element;
  text?: string | DefaultTFuncReturn;
  color?: string;
  size?: string;
  className?: string;
}

const ReactIcon: FC<ReactIconProps> = ({
  icon,
  text,
  color = brandingColor.light.orange.primary,
  size = "25px",
  className,
}) => {
  return (
    <Wrapper className={className}>
      <IconContext.Provider
        value={{
          color: color,
          className: "icon",
          size: size,
          style: {
            border: `1px solid ${color}`,
          },
        }}
      >
        {icon}
      </IconContext.Provider>
      {text && <span>{text}</span>}
    </Wrapper>
  );
};

export default ReactIcon;
