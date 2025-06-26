import axios from "axios";
import { useCourse } from "../stores/useCourse";

const Test = () => {
  const getCourse = useCourse((state) => state.getPublicCourses);
  return (
    <div>
      <button
        className="buttonclass"
        onClick={async() => {
          let res = await axios.get('http://localhost:5000/test');
          console.log(JSON.stringify(res.data));
        }}
      >
        Test
      </button>
    </div>
  );
};

export { Test };
