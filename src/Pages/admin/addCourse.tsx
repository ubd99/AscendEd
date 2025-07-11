import { useNavigate } from "react-router-dom";
import { useState, type ChangeEvent } from "react";
import { Navbar } from "../../Components/Navbar";
import { useCourse } from "../../stores/useCourse";
import type { ICourse } from "../../interfaces/Course";

const AddCourse = () => {
  const nav = useNavigate();
  const [sub, setSub] = useState<boolean>(false);

  const fields = {
    title: "",
    description: "",
  };
  const [err, setErr] = useState({
    title: true,
    description: true,
  });
  const [values, setValues] = useState(fields);

  const setCourseData = useCourse((state) => state.setCourseData);
  const createCourse = useCourse((state) => state.createCourse);

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (name === "description" && value.length < 8) {
      setErr({ ...err, [name]: true });
    } else if (name === "title" && value.length < 1) {
      setErr({ ...err, [name]: true });
    } else setErr({ ...err, [name]: false });
  };

  const subHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(err).some((val) => val === true)) {
      setSub(true);
      return null;
    } else {
      const course: ICourse = {
        title: values.title,
        description: values.description,
      };
      setCourseData(course);
      await createCourse();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full p-[calc(3vh+3vw)] lg:px-[calc(5vw+5vh)]">
        <div className="hidden sm:block w-3/7 my-auto mx-auto">
          <img
            src="../../src/assets/courseAdd.png"
            className="h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center lg:p-3 sm:w-full my-auto mx-auto">
          <p className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-purple-700">
            Add a course
          </p>
          <p className="paratext pt-10">Enter course details below</p>
          <div className="mx-auto sm:w-5/7 xl:4/7">
            <form className="pt-10 space-y-3" onSubmit={subHandler}>
              <div className="text-left">
                <label htmlFor="title">
                  <p className="font-opensans text-md px-1">Course Title</p>
                </label>
              </div>
              <input
                id="title"
                name="title"
                value={values.title}
                type="text"
                placeholder="Course name/title"
                className="w-full p-2 lg:p-3 border-2 border-gray-600 rounded-xl"
                onChange={changeHandler}
              />
              {err.title && sub ? (
                <p className="text-xs text-red-600">
                  Please enter a valid Course Title
                </p>
              ) : null}
              <div />
              <div className="text-left">
                <label htmlFor="description">
                  <p className="font-opensans text-md px-1">
                    Course Description
                  </p>
                </label>
              </div>
              <textarea
                id="description"
                name="description"
                value={values.description}
                placeholder="Enter course description here"
                rows={7}
                onChange={changeHandler}
                className="w-full p-2 lg:p-3 border-2 border-gray-600 rounded-xl"
              />
              {err.description && sub ? (
                <p className="text-xs text-red-600">
                  A description of minimum 8 characters is required
                </p>
              ) : null}
              <div className="flex justify-center space-x-10">
                <button className="buttonclass" type="submit">
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="p-20 text-center">
        <p>2025&copy; - AscendEd&trade;</p>
      </div>
    </div>
  );
};

export { AddCourse };
