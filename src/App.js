import React from "react";
import "./App.css";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Gallery from "./components/Gallery/gallery";
import Team from "./components/Team/team";
import Construction from "./components/Construction/Construction";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/Home/ScrollToTop";
import Login from "./components/Admin/Login/login";
import DashHome from "./components/Admin/Dashboard/DashHome";
import useLogin from "./components/Admin/Login/useLogin";
import ClientInfo from "./components/Admin/ClientInfo/ClientInfo";
import ProfitPage from "./components/Admin/ProfitPage/ProfitPage";
import CompanyWebsites from "./components/Admin/CompanyWebsites/CompanyWebsites";
import Leads from "./components/Admin/Leads/leads";
import CurrentTask from "./components/Admin/currentTask/currentTask";
import Calendar from "./components/Admin/Calendar/calendar";
import References from "./components/Admin/References/References";
import Timepunch from "./components/Admin/TimePunch/TimePunch";
import Showcase from "./components/Showcase/Showcase";

function App() {
  const { isAuthenticated, login, logout } = useLogin();

  return (
<Router>
  <ScrollToTop />
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/team" element={<Team />} />
    <Route path="/construction" element={<Construction />} />
    <Route path="/showcase" element={<Showcase />} />
    <Route
      path="/login"
      element={
        isAuthenticated ? (
          <Navigate to="/dashboard" />
        ) : (
          <Login onLogin={login} />
        )
      }
    />
    <Route
      path="/dashboard"
      element={
        isAuthenticated ? (
          <DashHome onLogout={logout} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />

    {/* Dashboard Routes */}
    <Route
      path="/client-info"
      element={
        isAuthenticated ? (
          <ClientInfo />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route
      path="/profit-page"
      element={
        isAuthenticated ? (
          <ProfitPage />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route
      path="/company-websites"
      element={
        isAuthenticated ? (
          <CompanyWebsites />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route
      path="/leads"
      element={
        isAuthenticated ? (
          <Leads />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route
      path="/current-task"
      element={
        isAuthenticated ? (
          <CurrentTask />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route
      path="/calendar"
      element={
        isAuthenticated ? (
          <Calendar />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route
      path="/references"
      element={
        isAuthenticated ? (
          <References />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route
      path="/timepunch"
      element={
        isAuthenticated ? (
          <Timepunch />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  </Routes>
</Router>
  );
}

export default App;
