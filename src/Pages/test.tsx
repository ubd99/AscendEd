import { useCourse } from "../stores/useCourse";

const Test = () => {
  const getCourse = useCourse((state) => state.getPublicCourses);
  return (
    <div>
      <button
        className="buttonclass"
        onClick={async() => {
          await getCourse(3);
        }}
      >
        Test
      </button>
    </div>
  );
};

export { Test };
