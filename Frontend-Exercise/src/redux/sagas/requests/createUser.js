import axios from "axios";

const createUser = (payload) => {
  console.log("payload",payload)

// Endpoint: `POST /register/v2`
  return axios.post(`http://localhost:3000/api/users/register/v2`, payload);
};

export default createUser;
