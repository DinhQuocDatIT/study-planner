import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Login, Register } from "../pages/auth";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Schedule from "../pages/Schedule/Schedule";
import Tasks from "../pages/Tasks/Tasks";
import Subjects from "../pages/Subjects/Subjects";
import AddSubject from "../pages/Subjects/AddSubject/AddSubject";
import AddTask from "../pages/Tasks/AddTask/AddTask";
import StudySessionManager from "../pages/StudySessions/StudySessionManager";
import AddSession from "../pages/StudySessions/AddSession/AddSession";
import StudySession from "../pages/StudySessions/StudySession/StudySession";
import UpdateSubject from "../pages/Subjects/UpdateSubject/UpdateSubject";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />

        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/add" element={<AddTask />} />

        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/add" element={<AddSubject />} />
        <Route path="/subjects/edit/:id" element={<UpdateSubject />} />

        <Route path="/study_sessions" element={<StudySessionManager />} />
        <Route path="/study_sessions/add" element={<AddSession />} />
        <Route
          path="/study_sessions/add/study-session"
          element={<StudySession />}
        />
        <Route path="/study_sessions/:id" element={<StudySession />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
