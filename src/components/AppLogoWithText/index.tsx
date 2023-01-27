import { FC } from "react";
import { useTranslation } from "react-i18next";
import { clsx } from "clsx";
import logo from "assets/logo/logo_black_250x.png";
import { Wrapper } from "./index.styles";

interface AppLogoWithTextProps {
  className?: string;
  textOnly?: boolean;
}

const AppLogoWithText: FC<AppLogoWithTextProps> = ({
  className,
  textOnly = false,
}) => {
  const { t } = useTranslation();
  return (
    <Wrapper
      className={clsx(className, {
        "text-only": textOnly,
        "logo-text": !textOnly,
      })}
    >
      {!textOnly && <img src={logo} alt="logo" height={"50px"} />}
      <p className="app-description">
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
