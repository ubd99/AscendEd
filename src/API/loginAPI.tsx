import axios from "axios";
import type { User } from "../interfaces/User";

const loginAPI = async(user: User) => {
    console.log('axios post sent on 5000')
  const data = await axios.post("http://localhost:5000/api/login", {
    "email" : user.email,
    "password" : user.password,
  });
  console.log("From LoginAPI: response is:")
  console.log(data.data.user);
};

export {loginAPI}
