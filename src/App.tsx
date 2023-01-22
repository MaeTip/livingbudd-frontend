import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './containers/layouts/DefaultLayout';
import PrivateRoute from "./components/PrivateRoute";
import HomePage from './containers/pages/HomePage';
import LoginPage from './containers/pages/admin/LoginPage';
import DashboardPage from './containers/pages/admin/DashboardPage';
import UnauthorizePage from "./containers/pages/UnauthorizationPage";
import CreateReservationPage from "./containers/pages/CreateReservationPage";

import { ToastContainer } from 'react-toastify';
import { routes } from "./utils/routers";
import 'react-toastify/dist/ReactToastify.css';
import './i18n'
import './App.css';
import ReservationList from "./containers/pages/admin/ReservationList";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/'>
          <Route path='admin'>
            <Route path='login' element={<LoginPage />} />
            <Route element={<PrivateRoute allowedRoles={['ADMIN']} />}>
              <Route element={<DefaultLayout />}>
                <Route path='dashboard' element={<DashboardPage />} />
                <Route path={routes.adminReservation} element={<ReservationList />} />
              </Route>
            </Route>
          </Route>
          <Route element={<DefaultLayout />}>
            <Route path='unauthorized' element={<UnauthorizePage />} />
          </Route>
          <Route index element={<HomePage />} />
          <Route path='reservation' element={<CreateReservationPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
