import axios from "axios";

const editUser = (payload) => {
  console.log(payload);
  const data = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    profilePicture: payload.profilePicture,
    phon: payload.phon,
    userName: payload.userName,
    isBuyer: payload.isBuyer,
    address: payload.address
  };

  const Id = payload._id;

  // Endpoint: `POST /users/profile/:id`
  return axios.post(`http://localhost:3000/api/users/profile/${Id}`, data);
};

export default editUser;
