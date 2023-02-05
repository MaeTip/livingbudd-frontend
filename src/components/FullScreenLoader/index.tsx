import { Layout, Space, Spin } from "antd";
const { Content } = Layout;

const FullScreenLoader = () => {
  return (
    <Content>
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
    </Content>
  );
};

export default FullScreenLoader;
