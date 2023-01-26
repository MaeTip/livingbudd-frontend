import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routes } from "./constants/routers";
import AdminLayout from "./containers/layouts/AdminLayout";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./containers/pages/HomePage";
import LoginPage from "./containers/pages/admin/LoginPage";
import DashboardPage from "./containers/pages/admin/DashboardPage";
import UnauthorizePage from "./containers/pages/UnauthorizationPage";
import CreateReservationPage from "./containers/pages/CreateReservationPage";
import ReservationList from "./containers/pages/admin/ReservationList";
import DefaultLayout from "./containers/layouts/DefaultLayout";

import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/">
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="reservation" element={<CreateReservationPage />} />
          <Route path="admin">
            <Route path="login" element={<LoginPage />} />
            <Route element={<PrivateRoute allowedRoles={["ADMIN"]} />}>
              <Route element={<AdminLayout />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route
                  path={routes.adminReservation}
                  element={<ReservationList />}
                />
              </Route>
            </Route>
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="unauthorized" element={<UnauthorizePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
