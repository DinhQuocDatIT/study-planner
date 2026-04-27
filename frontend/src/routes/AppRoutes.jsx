import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Login, Register } from "../pages/auth";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Schedule from "../pages/Schedule/Schedule";
import Tasks from "../pages/Tasks/Tasks";
import Subjects from "../pages/Subjects/Subjects";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/subjects" element={<Subjects />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
