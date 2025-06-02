import { Navbar } from "../Components/Navbar";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Login = () => {
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
              onClick={() => {}}
              style={{ cursor: "pointer" }}
              className="flex shadow-gray-500 shadow-xs rounded-lg py-0.5 pr-1 md:p-1.5"
            >
              <div className="flex justify-center items-center">
                <img src="../src/assets/Google.png" className="w-8 m-auto" />
              </div>
              <p className="my-auto text-sm">Login with Google</p>
            </div>
            <div
              onClick={() => {}}
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
            <form className="pt-10 space-y-3">
              <div className="text-left">
                <label htmlFor="em">
                  <p className="font-opensans text-md px-1">E-mail</p>
                </label>
              </div>
              <input
                id="em"
                type="text"
                placeholder="someone@example.com"
                className="w-full p-2 lg:p-3 border-2 border-gray-600 rounded-xl"
              />
              <div />
              <div className="text-left">
                <label htmlFor="pswd">
                  <p className="font-opensans text-md px-1">Password</p>
                </label>
              </div>
              <input
                id="pswd"
                type="password"
                placeholder="************"
                className="w-full p-2 lg:p-3 border-2 border-gray-600 rounded-xl"
              />
              <div className="flex justify-end pb-5">
                <button onClick={() => {}}>
                  <p className="underline text-purple-800">Forgot Password?</p>
                </button>
              </div>
              <div className="flex justify-center space-x-10">
                <button className="buttonclass">Login</button>
                <button className="buttonclass">Sign-up</button>
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
