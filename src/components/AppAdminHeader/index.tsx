import { Col, Layout, Menu, MenuProps, message, Row } from "antd";
import livingBuddLogo from "assets/livingbudd_logo_header.png";
import ProfileMenu from "components/ProfileMenu";
import { useAppSelector } from "../../redux/store";
import { HomeOutlined, AuditOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "utils/routers";

const AppAdminHeader = () => {
  const user = useAppSelector((state) => state.user.user);
  const { t } = useTranslation();
  const { Header } = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const enum MENU_KEY {
    HOME = "HOME",
    RESERVATION = "RESERVATION",
  }

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case MENU_KEY.RESERVATION: {
        navigate(routes.adminReservation);
        break;
      }
      case MENU_KEY.HOME: {
        navigate(routes.adminDashboard);
        break;
      }
      default: {
        message.info(`clicked ${e.key}`);
        break;
      }
    }
  };

  const items: MenuProps["items"] = [
    {
      label: t("menu.home"),
      key: MENU_KEY.HOME,
      icon: <HomeOutlined />,
    },
    {
      label: t("menu.reservation"),
      key: MENU_KEY.RESERVATION,
      icon: <AuditOutlined />,
    },
  ];

  const getSelectedKey = (): string => {
    switch (location.pathname) {
      case routes.adminDashboard: {
        return MENU_KEY.HOME;
      }
      case routes.adminReservation: {
        return MENU_KEY.RESERVATION;
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      <Row>
        <Col xs={{ span: 8 }} lg={{ span: 2 }}>
          <div
            style={{
              float: "left",
              marginRight: "10px",
            }}
          >
            <img
              src={livingBuddLogo}
              className="App-logo"
              alt="logo"
              height={"65px"}
            />
          </div>
        </Col>
        <Col xs={{ span: 16 }} lg={{ span: 22 }}>
          <Row justify="end">
            <Col flex="auto">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[MENU_KEY.HOME]}
                onClick={handleMenuClick}
                selectedKeys={[getSelectedKey()]}
                items={items}
              />
            </Col>
            <Col flex="none">
              <ProfileMenu user={user} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default AppAdminHeader;
