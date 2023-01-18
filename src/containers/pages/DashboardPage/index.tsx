import livingBuddLogo from './../../../living_budd_logo.png'
import { useAppSelector } from '../../../shared/store';

const DashboardPage = () => {
  let user = useAppSelector((state) => state.user.user);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hello, {user?.email}
        </div>
        <img src={livingBuddLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default DashboardPage
