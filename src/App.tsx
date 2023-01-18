import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DefaultLayout from './containers/layouts/DefaultLayout';
import HomePage from './containers/pages/HomePage';
import LoginPage from './containers/pages/LoginPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route element={<DefaultLayout />}>

        </Route>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
