import { Avatar, Dropdown, Menu, message } from 'antd'
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined
} from '@ant-design/icons'
import {Wrapper, MenuWrapper} from './index.styles'
import type { MenuProps } from 'antd';
import {removeAuthToken} from "utils/localstorage";
import {useNavigate} from "react-router-dom";
import {IUser} from "../../redux/dto";
import {FC} from "react";
import {useAppSelector} from "../../redux/store";

// <SettingOutlined />

export interface ProfileMenuProps {
  user: IUser | null
}


const ProfileMenu: FC<ProfileMenuProps> = (user) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeAuthToken()
    navigate('/admin/login')
  }

  const enum MENU_KEY {
    LOGOUT = "LOGOUT",
    SETTING = "SETTING",
    ACCOUNT = "ACCOUNT"
  }

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log(MENU_KEY.LOGOUT)
    if (e.key as string === (MENU_KEY.LOGOUT as unknown as string)) {
      handleLogOut()
      message.info(`You successfully logged out`);
    }
  };

  const items: MenuProps['items'] = [
    {
      label: `${user.user?.firstName} ${user.user?.lastName}`,
      key: MENU_KEY.ACCOUNT,
      icon: <UserOutlined />,
    },
    {
      label: 'Setting',
      key: MENU_KEY.SETTING,
      icon: <SettingOutlined />,
    },
    {
      type: 'divider',
    },
    {
      label: 'logout',
      key: MENU_KEY.LOGOUT,
      icon: <LogoutOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Wrapper className="profile-menu-wrapper">
      <Dropdown placement="bottomRight" trigger={['click']} menu={menuProps}>
        <div>
          <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#f56a00' }} />
        </div>
      </Dropdown>
    </Wrapper>
  )
}

export default ProfileMenu
