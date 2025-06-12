import axios from "axios";
import type { User } from "../interfaces/User";

const SignupAPI = async (user: User) => {
  try {
    const res = await axios
      .post("http://localhost:5000/api/signup", {
        f_name: user.f_name,
        l_name: user.l_name,
        email: user.email,
        password: user.password,
        uid: user.uid,
      })
    console.log("response is:")
    console.log(res.data)
  } catch (e) {
    console.log(`error in SignupAPI: ${e}`);
  }
};

export { SignupAPI };
