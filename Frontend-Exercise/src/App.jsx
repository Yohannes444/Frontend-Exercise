import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegisterUser from './component/RegisterUser.jsx';
import GetAllUsers from './component/getuser.jsx';
import LoginForm from './component/loginForm.jsx';
import EditUserForm from './component/editUserForm.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/users" element={<GetAllUsers />} />
        <Route path='/editUser' element={<EditUserForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
