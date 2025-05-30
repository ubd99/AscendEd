import { Navbar } from "../Components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full h-screen">
        <img
          src="./src/assets/signin.png"
          className="hidden sm:block w-[calc(25vw+25vh)] h-[calc(15vw+15vh)] my-auto"
        ></img>
        <div className="w-1/2 text-center lg:p-3 sm:w-5/7 lg:w-5/7 xl:w-4/7 my-auto">
          <p className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-purple-700">
            Let the journey begin.
            <br />
            You can start by signing in
          </p>
          <div className="mx-auto sm:w-5/7 lg:w-5/7 xl:w-4/7 ">
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
              <div/>
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
              <div className="flex justify-center space-x-10">
                <button className="buttonclass">Login</button>
                <button className="buttonclass">Sign-up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
