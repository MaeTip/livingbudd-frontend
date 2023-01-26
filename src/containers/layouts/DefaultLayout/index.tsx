import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Wrapper, LayoutWrapper } from "./index.styles";
import AppHeader from "components/AppHeader";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <LayoutWrapper>
      <AppHeader className={'fixed-width'}/>
      <Content>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Content>
    </LayoutWrapper>
  );
};

export default AdminLayout;
