import axios from "axios";

const createUser = (payload) => {
  console.log(payload)

  return axios.post("http://localhost:5453/users", payload);
};

export default createUser;
