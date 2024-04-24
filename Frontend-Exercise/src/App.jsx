import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RegisterUser from './component/RegisterUser.jsx';
import GetAllUsers from './component/getuser.jsx';
import LoginForm from './component/loginForm.jsx';

function App() {
  const user = useSelector(state => state.user.user.success);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/users" /> : <LoginForm />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/users" element={<GetAllUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
