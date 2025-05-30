import { useNavigate } from "react-router-dom";
import { courses } from "../DB/mockDB";
import { Rating } from "./rating";

interface ICourseInfo {
  className?: string;
  id?: string;
}

const Course_card: React.FC<ICourseInfo> = ({ className = "", id = "" }) => {
  const course = courses.find((c) => c.id === id);
  const nav = useNavigate();
  return (
      <div
        className={`rounded-xl w-full sm:w-3/10 sm:min-w-60 sm:h-80 md:h-90 lg:h-90 xl:h-100 flex items-center bg-white overflow-hidden ${className}`}
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)", cursor: "pointer"}}
        onClick={() => {nav(`/course/${course?.id}`)}}
      >
        <div className="h-full sm:w-1/2 pt-5 pl-5">
          <p className="text-base md:text-[1.06rem] lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold">{course?.name}</p>
          <p className="pt-5 font-opensans line-clamp-8">{course?.desc}</p>
          <Rating
            className="pt-10"
            rate={typeof course?.rating === "number" ? course.rating : 0}
          />
        </div>
        <div className="h-full pl-8">
        <div className="h-1/4"></div>
        <div className="h-3/4 w-full">
          <img
            src={course?.ImgSrc}
            className="h-full rounded-l-full object-cover"
          />
          </div>
        </div>
      </div>
  );
};
export { Course_card };
