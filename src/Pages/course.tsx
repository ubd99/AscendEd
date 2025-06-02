import { useParams } from "react-router-dom";
import { courses } from "../DB/mockDB";
import { Navbar } from "../Components/Navbar";
import { Rating } from "../Components/rating";

const Course = () => {
  const param = useParams();
  const id = param.id;
  const course = courses.find((c) => c.id === id);
  return (
    <div>
      <Navbar />
      <div className="p-[calc(2vh+2vw)]">
        <div className="grid md:flex justify-center">
          <div className="order-2 md:order-1 md:w-1/2 items-stretch">
            <p className="font-opensans font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">{`Course: ${course?.name}`}</p>
            <p className="font-opensans py-10 pr-10 text-base md:text-md lg:text-lg xl:text-xl">{`${course?.desc}`}</p>
            <Rating
              className=""
              rate={typeof course?.rating === "number" ? course?.rating : 0}
              label={true}
            />

            <div className="py-10">
              <button className="buttonclass">Enroll Now</button>
            </div>
          </div>
          <div className="order-1 md:order-2 md:w-1/2 items-stretch">
            <img
              src={course?.ImgSrc}
              className="mx-auto mt-10 mb-20 md:mt-0 md:mb-auto md:w-3/4 md:h-full rounded-xl xl:rounded-4xl object-cover"
            />
          </div>
        </div>
        <div className="pt-5">
          <p className="paratext font-semibold">
            What you'll learn in this course:
          </p>
        </div>
        <div className="md:flex md:flex-wrap space-y-10 justify-center px-[calc(3vh+3vw)] py-20">
          <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
            <p className="font-opensans font-bold">{course?.chapter1}</p>
          </div>
          <div className="hidden md:block bg-gray-400 w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
          <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
            <p className="font-opensans font-bold">{course?.chapter2}</p>
          </div>
          <div className="hidden md:block bg-gray-400 w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
          <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
            <p className="font-opensans font-bold">{course?.chapter3}</p>
          </div>
          <div className="hidden md:block bg-gray-400 w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
          <div className="text-center text-base md:text-md lg:text-lg xl:text-xl">
            <p className="font-opensans font-bold">{course?.chapter4}</p>
          </div>
          <div className="hidden md:block lg:hidden bg-transparent w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
        </div>
      </div>
      <div className="flex p-[calc(3vh+3vw)]">
        <p className="mx-auto">2025&copy; - Ascended&trade;</p>
      </div>
    </div>
  );
};

export { Course };
