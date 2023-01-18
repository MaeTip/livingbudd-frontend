import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './containers/layouts/DefaultLayout';
import HomePage from './containers/pages/HomePage';
import LoginPage from './containers/pages/LoginPage';
import DashboardPage from './containers/pages/DashboardPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/'>
          <Route element={<DefaultLayout />}>
            <Route path='dashboard' element={<DashboardPage />} />
          </Route>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
