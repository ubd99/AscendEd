import axios from "axios";
import { useCourse } from "../stores/useCourse";

const Test = () => {
  const getCourse = useCourse((state) => state.getPublicCourses);
  return (
    <div>
      <button
        className="buttonclass"
        onClick={async() => {
          const res = await getCourse(0);
          console.log(JSON.stringify(res.data));
        }}
      >
        Test
      </button>
    </div>
  );
};

export { Test };
