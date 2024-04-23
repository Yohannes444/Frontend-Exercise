import axios from "axios";
// Endpoint: `GET /fetch/dummy/user-v2`
export default () => axios.get(`http://localhost:3000/api/users/fetch/dummy/user-v2`);
