import axios from "axios";


const userLogin = async(payload) => {
// Endpoint: `POST /login`
  const login=await axios.post(`http://localhost:3000/api/users/login`, payload);
  if (login.status === 200){
    
  }
};

export default userLogin;
