import { useNavigate } from "react-router-dom";
import { Rating } from "./rating";
import type { ICourse } from "../interfaces/Course";

interface ICourseInfo {
  className?: string;
  course?: ICourse;
}

const Course_card: React.FC<ICourseInfo> = ({
  className = "",
  course = { title: " ", description: " " },
}) => {
  const nav = useNavigate();
  return (
    <div
      className={`relative rounded-4xl w-4/5 sm:w-3/10 sm:min-w-60 h-60 sm:h-80 md:h-90 lg:h-90 xl:h-100 flex items-center bg-white overflow-hidden ${className}`}
      style={{
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
        cursor: "pointer",
      }}
      onClick={() => {
        nav(`/course/${course?.id}`);
      }}
    >
      <div className="h-full w-3/5 pt-5 pl-5 absolute left-0">
        <p className="text-base md:text-[1.06rem] lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold">
          {course?.title}
        </p>
        <p className="pt-5 font-opensans line-clamp-8">{course?.description}</p>
        <Rating
          className="pt-10"
          rate={typeof course?.rating === "number" ? course.rating : 0}
        />
      </div>
      <div className="w-2/5 h-full pl-2 absolute right-0">
          <img
            className="h-full w-full rounded-l-full object-cover"
            src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.amazonaws.com/uploads/coursetemps/${course.id}`}
          />
      </div>
    </div>
  );
};
export { Course_card };
