import { Col, Layout, Menu, Row } from 'antd';
import livingBuddLogo from 'assets/livingbudd_logo_header.png';
import ProfileMenu from 'components/ProfileMenu';
import {useAppSelector} from "../../redux/store";

const { Header } = Layout;

const AppHeader = () => {
  let user = useAppSelector((state) => state.user.user);

  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <Row>
        <Col span={2}>
          <div
            style={{
              float: 'left',
              marginRight: '10px'
            }}>
            <img src={livingBuddLogo} className="App-logo" alt="logo" height={'65px'}/>
          </div>
        </Col>
        <Col span={22}>
          <Row align="middle" justify="end" gutter={16}>
            <Col flex="auto" >
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(3).fill(null).map((_, index) => ({
                  key: String(index + 1),
                  label: `nav ${index + 1}`,
                }))}
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

export default AppHeader;