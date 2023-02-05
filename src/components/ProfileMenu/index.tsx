import { FC } from "react";
import { Avatar, Dropdown, message } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Wrapper } from "./index.styles";
import type { MenuProps } from "antd";
import { removeAuthToken } from "utils/localstorage";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../redux/dto";

export interface ProfileMenuProps {
  user: IUser | null;
}

const ProfileMenu: FC<ProfileMenuProps> = (user) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeAuthToken();
    navigate("/admin/login");
  };

  const enum MenuKey {
    LOGOUT = "LOGOUT",
    SETTING = "SETTING",
    ACCOUNT = "ACCOUNT",
  }

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if ((e.key as string) === (MenuKey.LOGOUT as unknown as string)) {
      handleLogOut();
      message.info(`You successfully logged out`);
    }
  };

  const items: MenuProps["items"] = [
    {
      label: `${user.user?.firstName} ${user.user?.lastName}`,
      key: MenuKey.ACCOUNT,
      icon: <UserOutlined />,
    },
    {
      label: "Setting",
      key: MenuKey.SETTING,
      icon: <SettingOutlined />,
    },
    {
      type: "divider",
    },
    {
      label: "logout",
      key: MenuKey.LOGOUT,
      icon: <LogoutOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Wrapper className="profile-menu-wrapper">
      <Dropdown placement="bottomRight" trigger={["click"]} menu={menuProps}>
        <div>
          <Avatar
            icon={<UserOutlined />}
            style={{ backgroundColor: "#f56a00" }}
          />
        </div>
      </Dropdown>
    </Wrapper>
  );
};

export default ProfileMenu;
