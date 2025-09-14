import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import PracticePage from './pages/PracticePage';
import QuestionBankPage from './pages/QuestionBankPage';
import CoursesPage from './pages/CoursesPage';
import MockTestPage from './pages/MockTestPage';
import ContestsPage from './pages/ContestsPage';
import NotesPage from './pages/NotesPage';
import PlannerPage from './pages/PlannerPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/question-bank" element={<QuestionBankPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/mock-tests" element={<MockTestPage />} />
          <Route path="/contests" element={<ContestsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

