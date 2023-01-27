import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "components/AppHeader";
import AppFooter from "components/AppFooter";
import { LayoutWrapper } from "./index.styles";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <LayoutWrapper>
      <AppHeader className="fixed-width" />
      <Content>
        <Outlet />
      </Content>
      <AppFooter className="fixed-width" />
    </LayoutWrapper>
  );
};

export default AdminLayout;
