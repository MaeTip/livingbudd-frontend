import livingBuddLogo from 'assets/livingbudd_logo.svg'
import { Typography } from 'antd';
const { Title } = Typography;

const UnauthorizePage = () => {
  return (
    <div className="App">
      <Title>
        No Authorized
      </Title>
      <img src={livingBuddLogo} className="App-logo" alt="logo" />
    </div>
  )
}

export default UnauthorizePage
