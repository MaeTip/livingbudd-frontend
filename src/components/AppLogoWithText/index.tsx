import { FC } from "react";
import { useTranslation } from "react-i18next";
import { clsx } from "clsx";
import backLogo from "assets/logo/logo_black_250x.png";
import whiteLogo from "assets/logo/logo_white_250x.png";
import { Wrapper } from "./index.styles";

interface AppLogoWithTextProps {
  className?: string;
  textOnly?: boolean;
  textColor?: "black" | "white";
  textVertical?: boolean;
  logoColor?: "black" | "white";
  logoHeight?: string;
}

const AppLogoWithText: FC<AppLogoWithTextProps> = ({
  className,
  logoColor = "black",
  logoHeight = "50px",
  textOnly = false,
  textVertical = false,
  textColor = "black",
}) => {
  const { t } = useTranslation();
  return (
    <Wrapper
      className={clsx(className, {
        "text-only": textOnly,
        "logo-text": !textOnly,
        "text-vertical": textVertical,
      })}
    >
      {!textOnly && (
        <img
          src={logoColor === "black" ? backLogo : whiteLogo}
          alt="logo"
          height={logoHeight}
        />
      )}
      <p className={clsx("app-description", `${textColor}-color`)}>
        <span
          className="app-name"
          dangerouslySetInnerHTML={{ __html: t("app.name_emphasized") }}
        />
        <span className="app-moto">{t("app.moto")}</span>
      </p>
    </Wrapper>
  );
};

export default AppLogoWithText;
