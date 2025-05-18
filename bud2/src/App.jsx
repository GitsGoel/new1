import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoadmapPage from './pages/RoadmapPage';
import CoursesPage from './pages/CoursesPage';
import Profile from './pages/Profile';
import Tests from './pages/Tests';
import NotificationsPage from './pages/NotificationsPage';
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </Router>
  );
}