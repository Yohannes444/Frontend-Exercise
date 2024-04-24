import axios from "axios";


const userLogin = async(payload) => {
  console.log("payload from:requser: ",payload)
// Endpoint: `POST /login`
  return await axios.post(`http://localhost:3000/api/users/login`, payload);
  
};

export default userLogin;
