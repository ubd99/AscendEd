import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import type { User } from "../interfaces/User";
import { useAuthStore } from "../stores/useAuthStore";

const Signup = () => {
  const initFormData = { fn: "", ln: "", em: "", psw: ""};
  const setUserData = useAuthStore((state)=> state.setUserData);
  const signupUser = useAuthStore((state)=> state.signup)
  const [values, setValues] = useState(initFormData);
  const [err, setErr] = useState({
    fn: true,
    ln: true,
    em: true,
    psw: true,
  });
  const [sub, setSub] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if ((name === "fn" || name === "ln") && value.length < 1) {
      setErr({ ...err, [name]: true });
    } else if (name === "psw" && value.length < 8) {
      setErr({ ...err, [name]: true });
    } else if (name === "em" && !(value.includes("@") && value.includes("."))) {
      setErr({ ...err, [name]: true });
    } else setErr({ ...err, [name]: false });
    console.log(values);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("in SubmitHandler");
    if (Object.values(err).some((val) => val === true)) {
      console.log("in SubmitHandler setSub is set to true");
      setSub(true);
      return null;
    } else {
      const user: User = {
        email: values.em,
        f_name: values.fn,
        l_name: values.ln,
      }
      setUserData(user);
      const response = await signupUser(values.psw);
      if(response){
        console.log("success from signup.tsx");
      }
    }
  };

  const nav = useNavigate();
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
            Let's get you registered
          </p>
          <p className="paratext pt-10">We're going to need some information</p>
          <div className="mx-auto sm:w-5/7 xl:4/7">
            <form
              className="pt-10 space-y-3 text-left"
              onSubmit={submitHandler}
            >
              <div className="lg:flex text-left">
                <div className="pr-5">
                  <label htmlFor="fn">
                    <p className="font-opensans text-md">First Name</p>
                  </label>
                  <input
                    id="fn"
                    name="fn"
                    value={values.fn}
                    onChange={changeHandler}
                    type="text"
                    placeholder="First Name"
                    className="mt-3 p-3 w-full border-gray-400 border-2 rounded-xl"
                  ></input>
                  {sub && err.fn ? (
                    <p className="text-sm ml-2 text-red-600">*required</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="ln">
                    <p className="pt-3 lg:pt-0 font-opensans text-md">Last Name</p>
                  </label>
                  <input
                    id="ln"
                    name="ln"
                    value={values.ln}
                    onChange={changeHandler}
                    type="text"
                    placeholder="Last Name"
                    className="mt-3 p-3 w-full border-gray-400 border-2 rounded-xl"
                  ></input>
                  {sub && err.ln ? (
                    <p className="text-sm ml-2 text-red-600">*required</p>
                  ) : null}
                </div>
              </div>
              <div className="text-left pt-2">
                <label htmlFor="em">
                  <p className="font-opensans text-md px-1">E-mail</p>
                </label>
              </div>
              <input
                id="em"
                name="em"
                value={values.em}
                onChange={changeHandler}
                type="text"
                placeholder="someone@example.com"
                className="w-full m-auto p-2 lg:p-3 border-2 border-gray-600 rounded-xl"
              />
              {sub && err.em ? (
                <p className="text-sm text-red-600">*enter a valid email</p>
              ) : null}
              <div />
              <div className="text-left">
                <label htmlFor="psw">
                  <p className="font-opensans text-md px-1">Password</p>
                </label>
              </div>
              <input
                id="psw"
                type="password"
                name="psw"
                value={values.psw}
                onChange={changeHandler}
                placeholder="************"
                className="w-full p-2 m-auto lg:p-3 border-2 border-gray-600 rounded-xl"
              />
              {sub && err.psw ? (
                <p className="text-sm text-red-600">
                  *password must be 8 or more characters
                </p>
              ) : null}
              <div className="flex justify-end pb-5">
                <button
                  onClick={() => {
                    nav("/signin");
                  }}
                >
                  <p className="underline text-purple-800">Back to Login</p>
                </button>
              </div>
              <button className="buttonclass" type="submit">
                Sign-up
              </button>
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

export { Signup };
