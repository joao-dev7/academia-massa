import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Members from './pages/Members'
import Dashboard from './pages/Dashboard';
import Financial from './pages/Financial';
import Staff from './pages/Staff';
import Training from './pages/Training';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/members' element={<Members />} />
        <Route path='/financial' element={<Financial />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/training' element={<Training />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
