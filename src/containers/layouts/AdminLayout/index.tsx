import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Wrapper } from "./index.styles";
import AppLoginHeader from "components/AppAdminHeader";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout>
      <AppLoginHeader />
      <Content>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Content>
    </Layout>
  );
};

export default AdminLayout;
