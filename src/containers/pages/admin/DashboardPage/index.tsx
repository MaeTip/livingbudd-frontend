import livingBuddLogo from 'assets/livingbudd_logo.svg'
import { useAppSelector } from 'redux/store';

const DashboardPage = () => {
  let user = useAppSelector((state) => state.user.user);

  return (
    <div className="center-page">
      <div>
        Hello, {user?.email}
      </div>
      <img src={livingBuddLogo} className="App-logo" alt="logo" />
    </div>
  )
}

export default DashboardPage
