import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, type ChangeEvent } from "react";
import type { User } from "../interfaces/User";
import { useAuthStore } from "../stores/useAuthStore";
import { useToken } from "../stores/useToken";

const Login = () => {
  const nav = useNavigate();
  const setToken = useToken((state) => state.setToken);
  const [sub, setSub] = useState<boolean>(false);
  const [acErr, setAcErr] = useState<boolean>(false);
  const login = useAuthStore((state) => state.login);
  const name = useAuthStore((state) => state.f_name);
  const profhandle = useToken((state) => state.profileAPI);
  const adminHandle = useToken((state) => state.adminAPI);

  const fields = {
    email: "",
    password: "",
  };
  const [err, setErr] = useState({
    email: true,
    password: true,
  });
  const [values, setValues] = useState(fields);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (name === "password" && value.length < 8) {
      setErr({ ...err, [name]: true });
    } else if (
      name === "email" &&
      !(value.includes("@") && value.includes("."))
    ) {
      setErr({ ...err, [name]: true });
    } else setErr({ ...err, [name]: false });
  };

  const subHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (Object.values(err).some((val) => val === true)) {
        setSub(true);
        return null;
      } else {
        const user: User = {
          email: values.email,
          password: values.password,
        };
        const loginData = await login(user);
        if (loginData.token) {
          console.log(
            "from login subhandler: user is ",
            JSON.stringify(loginData.user),
            ", useAuthStore.state.name is ",
            name
          );
          setToken(loginData.token);
          console.log(loginData.token);
          nav('/');
        } else if (loginData.status === 401) {
          setAcErr(true);
          console.log("Account does not exist");
        }
      }
    } catch (e) {
      setAcErr(true);
      console.log("error in login.tsx: ", e);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full p-[calc(3vh+3vw)] lg:px-[calc(5vw+5vh)]">
        <img
          src="./src/assets/signin.png"
          className="hidden sm:block w-3/7 my-auto mx-auto"
        ></img>
        <div className="w-full md:w-1/2 text-center lg:p-3 sm:w-full my-auto mx-auto">
          <p className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-purple-700">
            Let the journey begin.
            <br />
            You can start by signing in
          </p>
          <p className="paratext pt-10">
            Enter your credentials below to continue
          </p>
          <div className="flex justify-center pt-5 space-x-3">
            <div
              onClick={adminHandle}
              style={{ cursor: "pointer" }}
              className="flex shadow-gray-500 shadow-xs rounded-lg py-0.5 pr-1 md:p-1.5"
            >
              <div className="flex justify-center items-center">
                <img src="../src/assets/Google.png" className="w-8 m-auto" />
              </div>
              <p className="my-auto text-sm">Login with Google</p>
            </div>
            <div
              onClick={profhandle}
              style={{ cursor: "pointer" }}
              className="flex shadow-gray-500 shadow-xs rounded-lg py-0.5 pr-1 md:p-1.5"
            >
              <div className="flex justify-center items-center">
                <img src="../src/assets/Apple.png" className="w-8 m-auto" />
              </div>
              <p className="my-auto text-xs md:text-sm">Login with Apple</p>
            </div>
          </div>
          <div className="mx-auto sm:w-5/7 xl:4/7">
            <form className="pt-10 space-y-3" onSubmit={subHandler}>
              <div className="text-left">
                <label htmlFor="email">
                  <p className="font-opensans text-md px-1">E-mail</p>
                </label>
              </div>
              <input
                id="email"
                name="email"
                value={values.email}
                type="text"
                placeholder="someone@example.com"
                className="w-full p-2 lg:p-3 border-2 border-gray-600 rounded-xl"
                onChange={changeHandler}
              />
              {err.email && sub ? (
                <p className="text-xs text-red-600">
                  Please enter a valid email
                </p>
              ) : null}
              <div />
              <div className="text-left">
                <label htmlFor="password">
                  <p className="font-opensans text-md px-1">Password</p>
                </label>
              </div>
              <input
                id="password"
                name="password"
                value={values.password}
                type="password"
                placeholder="*********"
                onChange={changeHandler}
                className="w-full p-2 lg:p-3 border-2 border-gray-600 rounded-xl"
              />
              {err.password && sub ? (
                <p className="text-xs text-red-600">
                  Password must be 8 characters or more
                </p>
              ) : null}
              <div className="flex justify-end pb-5">
                <button onClick={() => {}}>
                  <p className="underline text-purple-800">Forgot Password?</p>
                </button>
              </div>
              {acErr ? (
                <p className="text-xs text-red-600 font-semibold">
                  *Invalid Credentials
                </p>
              ) : null}
              <div className="flex justify-center space-x-10">
                <button className="buttonclass" type="submit">
                  Login
                </button>
                <button
                  className="buttonclass"
                  onClick={() => {
                    nav("/signup");
                  }}
                >
                  Sign-up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="p-20 text-center">
        <p>2025&copy; - AscendEd&trade;</p>
      </div>
    </div>
  );
};

export { Login };
