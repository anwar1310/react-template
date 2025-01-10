import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./config/Layout";
import ProtectedRoute from "./config/ProtectedRoute";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import { ProtectedRoutes, PublicRoutes } from "./utils";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PublicRoutes.login} element={<Login />} />
          <Route path={PublicRoutes.register} element={<Register />} />
          <Route
            path={PublicRoutes.forgotPassword}
            element={<ForgotPassword />}
          />
          <Route
            path={ProtectedRoutes.dashboard}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path={PublicRoutes.noPage} element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
