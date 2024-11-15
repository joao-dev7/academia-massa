import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Members from './pages/Members'
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/members' element={<Members />} />
        <Route path='/dashboard' element={<Dashboard userClass='Administrador'/>} />
      </Routes>
    </Router>
  )
}

export default App;
