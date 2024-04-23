import axios from "axios";

const userLogin = (payload) => {
  console.log(payload)

  return axios.post("http://localhost:5453/users", payload);
};

export default userLogin;
