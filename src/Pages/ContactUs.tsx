import { Navbar } from "../Components/Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex p-[calc(3vh+3vw)] space-x-10">
        <div className="hidden md:block items-stretch w-1/2">
          <div className="bg-[url('../src/assets/ContactUsNew.png')] my-auto h-full w-full mr-20 md:flex text-center justify-center items-center px-10 rounded-4xl">
            <p className="mx-auto font-opensans font-bold text-white opacity-45 md:text-5xl lg:text-6xl xl:text-8xl">
              AscendED
            </p>
          </div>
        </div>
        <div className="text-center w-full sm:px-7 md:px-0 md:w-3/7">
          <p className="font-opensans mx-auto text-purple-800 font-semibold md:text-2xl lg:text-4xl xl:text-5xl">
            Contact Us
          </p>
          <div className="text-left p-[calc(2vh+2vw)] w-full">
            <form>
              <div className="lg:flex">
                <div className="pr-5">
                  <label htmlFor="fn">
                    <p className="pt-7 lg:pt-20 font-opensans md:text-sm lg:text-lg xl:text-xl">
                      First Name
                    </p>
                  </label>
                  <input
                    id="fn"
                    type="text"
                    placeholder="First Name"
                    className="my-5 p-3 w-full border-gray-400 border-2 rounded-xl"
                  ></input>
                </div>
                <div>
                  <label htmlFor="ln">
                    <p className="pt-7 lg:pt-20 font-opensans md:text-sm lg:text-lg xl:text-xl">
                      Last Name
                    </p>
                  </label>
                  <input
                    id="ln"
                    type="text"
                    placeholder="Last Name"
                    className="my-5 p-3 w-full border-gray-400 border-2 rounded-xl"
                  ></input>
                </div>
              </div>
              <label htmlFor="em">
                <p className="pt-7 font-opensans md:text-sm lg:text-lg xl:text-xl">
                  Email Address
                </p>
              </label>
              <input
                id="em"
                type="text"
                placeholder="someone@example.com"
                className="my-5 p-3 w-full border-gray-400 border-2 rounded-xl"
              ></input>
              <label htmlFor="msg">
                <p className="pt-7 font-opensans md:text-sm lg:text-lg xl:text-xl">
                  Your Message
                </p>
              </label>
              <textarea
                id="msg"
                placeholder="Message here"
                className="my-5 p-3 w-full h-40 border-gray-400 border-2 rounded-2xl"
              ></textarea>
            </form>
          </div>
          <button className="buttonclass">Submit</button>
        </div>
      </div>
    </div>
  );
};

export { ContactUs };
