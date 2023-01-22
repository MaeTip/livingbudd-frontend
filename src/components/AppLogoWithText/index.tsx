import { useTranslation } from "react-i18next";
import { Wrapper } from "./index.styles";
import { FC } from "react";

interface AppLogoWithTextProps {
  className: string | null;
}

const AppLogoWithText: FC<AppLogoWithTextProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Wrapper className={`${className}`}>
      <div className="app-name">
        <span>{t("app.name")}</span>
        <span className="emphasized">{t("app.name_emphasized")}</span>
      </div>
      <div>{t("app.moto")}</div>
    </Wrapper>
  );
};

export default AppLogoWithText;
