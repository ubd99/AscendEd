import { Navbar } from "../Components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="md:text-left md:flex p-[calc(3vh+3vw)]">
        <div className="block md:hidden flex justify-center pb-10">
          <img
            className="rounded-2xl mx-auto"
            src="./src/assets/aboutnew.jpg"
          />
        </div>
        <div className="text-center md:text-left md:my-auto w-full md:w-1/2 md:pr-20 md:pb-0">
          <p className="font-opensans mx-auto text-purple-700 font-semibold md:text-2xl lg:text-4xl xl:text-5xl">
            About Ascended
          </p>
          <p className="mx-auto pt-7 lg:pt-20 font-opensans md:text-sm lg:text-lg xl:text-xl">
            Every ambition deserves the right support. We’re a team of creatives
            and strategists turning vision into progress. From first steps to
            scaling up, we move with purpose—together.
          </p>
        </div>
        <div className="hidden md:block w-1/2 flex">
          <img
            className="rounded-4xl my-auto"
            src="./src/assets/aboutnew.jpg"
          />
        </div>
      </div>
      <div className="md:flex md:flex-wrap space-y-10 justify-center px-[calc(3vh+3vw)] py-20">
        <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
          <p className="font-opensans font-bold">10000+</p>
          <p className="font-opensans font-semibold">Active Users</p>
        </div>
        <div className="hidden md:block bg-gray-400 w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
        <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
          <p className="font-opensans font-bold">25000+</p>
          <p className="font-opensans font-semibold">Enrolled Students</p>
        </div>
        <div className="hidden md:block bg-gray-400 w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
        <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
          <p className="font-opensans font-bold">1000+</p>
          <p className="font-opensans font-semibold">Hours Content</p>
        </div>
        <div className="hidden lg:block bg-gray-400 w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
        <div className="hidden lg:block text-center text-base md:text-md lg:text-lg xl:text-xl">
          <p className="font-opensans font-bold">300+</p>
          <p className="font-opensans font-semibold">Courses</p>
        </div>
      </div>
      <div className="md:flex p-[calc(2vh+2vw)]">
        <div className="md:w-1/2">
          <img className="rounded-4xl" src="./src/assets/instructnew.png" />
        </div>
        <div className="pt-20 md:pt-0 text-center md:text-left md:pl-20 md:w-1/2 my-auto pb-25 md:pb-0">
          <p className="font-opensans text-purple-700 font-semibold md:text-2xl lg:text-4xl xl:text-5xl">
            Mentors Committed to Your Success
          </p>
          <p className="pt-10 lg:pt-10 font-opensans md:text-sm lg:text-lg xl:text-xl">
            Our <b>instructors</b> are more than just teachers — they're mentors
            dedicated to helping students succeed. With real-world experience
            and a passion for education, they bring clarity, support, and
            motivation to every step of the learning journey.
          </p>
        </div>
      </div>
      <div className="md:flex md:flex-wrap space-y-10 justify-center px-[calc(3vh+3vw)] py-20">
        <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
          <p className="font-opensans font-bold">200+</p>
          <p className="font-opensans font-semibold">Expert Instructors</p>
        </div>
        <div className="hidden md:block bg-gray-400 w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
        <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
          <p className="font-opensans font-bold">98%</p>
          <p className="font-opensans font-semibold">Positive Feedback</p>
        </div>
        <div className="hidden md:block bg-gray-400 w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
        <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
          <p className="font-opensans font-bold">The Top 1%</p>
          <p className="font-opensans font-semibold">Instructors</p>
        </div>
        <div className="hidden lg:block bg-gray-400 w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
        <div className="hidden lg:block text-center text-base md:text-md lg:text-lg xl:text-xl">
          <p className="font-opensans font-bold">100+</p>
          <p className="font-opensans font-semibold">Workshops</p>
        </div>
      </div>
      <div className="md:flex justify-center p-[calc(3vh+3vw)]">
        <div className="md:hidden pb-10">
          <img className="rounded-2xl mx-auto" src="./src/assets/plan.png" />
        </div>
        <div className="mx-auto text-center md:text-left justify-center md:w-1/2 md:my-auto md:pr-20 pb-25 md:pb-0">
          <p className="font-opensans text-purple-700 font-semibold md:text-2xl lg:text-4xl xl:text-5xl">
            Flexible Plans, Affordable Prices
          </p>
          <p className="pt-10 lg:pt-10 font-opensans md:text-sm lg:text-lg xl:text-xl">
            Every ambition deserves the right support. We’re a team of creatives
            and strategists turning vision into progress. From first steps to
            scaling up, we move with purpose—together.
          </p>
        </div>
        <div className="hidden md:block w-1/2">
          <img className="rounded-4xl mx-auto" src="./src/assets/plan.png" />
        </div>
      </div>
      <div className="flex p-[calc(3vh+3vw)]">
        <p className="mx-auto">2025&copy; - Ascended&trade;</p>
      </div>
    </div>
  );
};

export { About };
