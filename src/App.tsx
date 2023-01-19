import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './containers/layouts/DefaultLayout';
import HomePage from './containers/pages/HomePage';
import LoginPage from './containers/pages/admin/LoginPage';
import DashboardPage from './containers/pages/admin/DashboardPage';
import PrivateRoute from "./components/privateRoute";
import UnauthorizePage from "./containers/pages/UnauthorizationPage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

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
              </Route>
            </Route>
          </Route>
          <Route element={<DefaultLayout />}>
            <Route path='unauthorized' element={<UnauthorizePage />} />
          </Route>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
