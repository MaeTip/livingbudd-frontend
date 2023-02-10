import { Col, Layout, Menu, MenuProps, message, Row } from "antd";
import ProfileMenu from "components/ProfileMenu";
import { useAppSelector } from "redux/store";
import { HomeOutlined, AuditOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "constants/routers";
import livingBuddLogo from "assets/logo/logo_white_250x.png";
import { MdBedroomParent } from "react-icons/md";
import React, { FC } from "react";

interface IProps {
  className?: string;
}

const AppAdminHeader: FC<IProps> = ({ className }) => {
  const user = useAppSelector((state) => state.user.user);
  const { t } = useTranslation();
  const { Header } = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const enum MenuKey {
    HOME = "HOME",
    RESERVATION = "RESERVATION",
    ROOM_OWNER = "ROOM_OWNER",
    ROOM = "ROOM",
  }

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case MenuKey.RESERVATION: {
        navigate(routes.adminReservation);
        break;
      }
      case MenuKey.HOME: {
        navigate(routes.adminDashboard);
        break;
      }
      case MenuKey.ROOM_OWNER: {
        navigate(routes.admin.roomOwnerList);
        break;
      }
      case MenuKey.ROOM: {
        navigate(routes.admin.roomList);
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
      key: MenuKey.HOME,
      icon: <HomeOutlined />,
    },
    {
      label: t("menu.reservation"),
      key: MenuKey.RESERVATION,
      icon: <AuditOutlined />,
    },
    {
      label: t("menu.room_owner"),
      key: MenuKey.ROOM_OWNER,
      icon: <AuditOutlined />,
    },
    {
      label: t("menu.room"),
      key: MenuKey.ROOM,
      icon: <MdBedroomParent />,
    },
  ];

  const getSelectedKey = (): string => {
    switch (location.pathname) {
      case routes.adminDashboard: {
        return MenuKey.HOME;
      }
      case routes.adminReservation: {
        return MenuKey.RESERVATION;
      }
      case routes.admin.roomOwnerList: {
        return MenuKey.ROOM_OWNER;
      }
      case routes.admin.roomList: {
        return MenuKey.ROOM;
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Header
      className={className}
      style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
    >
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
                defaultSelectedKeys={[MenuKey.HOME]}
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
