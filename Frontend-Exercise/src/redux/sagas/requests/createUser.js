import axios from "axios";

const createUser = (name) => {
  return axios.post("http://localhost:5453/users", { name });
};

export default createUser;
