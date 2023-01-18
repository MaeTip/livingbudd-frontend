import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const DefaultLayout = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default DefaultLayout;