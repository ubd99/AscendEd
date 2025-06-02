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
        <div className="grid md:flex justify-center items-center">
          <div className="order-2 md:order-1 md:w-1/2">
            <p className="font-opensans font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">{`Course: ${course?.name}`}</p>
            <p className="font-opensans py-10 pr-10 text-base md:text-md lg:text-lg xl:text-xl">{`${course?.desc}`}</p>
            <Rating className="" rate={typeof course?.rating === "number" ? course?.rating : 0} label={true}/>
            <div className="py-10">
              <button className="buttonclass">Enroll Now</button>
            </div>
          </div>
          <div className="order-1 md:order-2 md:w-1/2 flex justify-center">
            <img src={course?.ImgSrc} className="mx-auto md:w-3/4 rounded-4xl object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Course };
