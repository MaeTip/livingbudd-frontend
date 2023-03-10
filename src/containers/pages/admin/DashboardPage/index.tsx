import livingBuddLogo from "assets/logo/logo_black.svg";
import { useAppSelector } from "redux/store";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const user = useAppSelector((state) => state.user.user);
  const { t } = useTranslation();

  return (
    <div className="center-page">
      <div>{t("common.welcome")}</div>
      <div>{user?.email}</div>
      <img src={livingBuddLogo} className="App-logo" alt="logo" />
    </div>
  );
};

export default DashboardPage;
