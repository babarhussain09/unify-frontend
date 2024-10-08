import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/student/*" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
