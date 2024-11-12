import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App;
