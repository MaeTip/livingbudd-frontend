import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Wrapper, LayoutWrapper } from "./index.styles";
import AppLoginHeader from "components/AppAdminHeader";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <LayoutWrapper>
      <Layout>
        <AppLoginHeader className="admin-header" />
        <Content>
          <Wrapper>
            <Outlet />
          </Wrapper>
        </Content>
      </Layout>
    </LayoutWrapper>
  );
};

export default AdminLayout;
