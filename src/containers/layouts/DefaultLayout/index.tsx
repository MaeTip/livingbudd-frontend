import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Wrapper } from "./index.styles";
import AppHeader from "components/AppHeader";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Content>
    </Layout>
  );
};

export default AdminLayout;
