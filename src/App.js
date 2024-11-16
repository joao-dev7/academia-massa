import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Members from './pages/Members'
import Dashboard from './pages/Dashboard';
import Financial from './pages/Financial';
import Staff from './pages/Staff';
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
        {/* TODO:  Puxar o userClass do BD*/}
        <Route path='/dashboard' element={<Dashboard userClass='Administrador'/>} />
      </Routes>
    </Router>
  )
}

export default App;
