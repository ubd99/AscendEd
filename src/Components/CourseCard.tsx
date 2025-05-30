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
        className={`rounded-xl w-full sm:w-3/10 sm:min-w-90 h-140 flex items-center justify-center bg-white overflow-hidden ${className}`}
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)", cursor: "pointer"}}
        onClick={() => {nav(`/course/${course?.id}`)}}
      >
        <div className="h-full w-3/5 sm:w-1/2 pt-10 pl-5 z-10">
          <p className="xl:text-2xl 2xl:text-4xl font-semibold">{course?.name}</p>
          <p className="pr-2 pt-5 font-opensans">{course?.desc}</p>
          <Rating
            className="pt-10"
            rate={typeof course?.rating === "number" ? course.rating : 0}
            label= {true}
          />
        </div>
        <div className="h-full w-2/5 z-0">
          <img
            src={course?.ImgSrc}
            className="h-full rounded-l-full object-cover"
          />
        </div>
      </div>
  );
};
export { Course_card };
