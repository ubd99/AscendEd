import { useNavigate } from "react-router-dom";
import { Course_card } from "../Components/CourseCard";
import { Navbar } from "../Components/Navbar";
import { Testimonial } from "../Components/Testimonial";
import { useCourse } from "../stores/useCourse";
import { useEffect } from "react";
const Home = () => {
  const getCourses = useCourse((state) => state.getPublicCourses);
  const courses = useCourse((state) => state.courses);
  const nav = useNavigate();
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getCourses(3);
    };

    fetchCourses();
  }, []);
  return (
    <div className="w-full">
      <Navbar />
      <div className="text-center p-[calc(3vh+3vw)] lg:px-[calc(5vw+5vh)] pb-50 grid sm:flex sm:text-left">
        <div className="sm:w-[50vw] order-2 sm:order-1 pt-5 sm:pt-0 my-auto space-y-[2.5vh]">
          <p className="font-semibold font-opensans headertext">
            AscendEd - Courses that help you grow
          </p>
          <p className="text-[14px] font-opensans paratext">
            Unlock your potential -<br />
            learn anytime, anywhere.
            <br />
            Expert-led online courses designed to elevate your skills and your
            future.
          </p>
        </div>
        <div className="w-full order-1 sm:order-2 sm:pt-5 mx-auto sm:pl-30">
          <img
            src="./src/assets/home.png"
            className="mx-auto rounded-3xl sm:mx-0 sm:ml-auto h-fit w-full md:w-[calc(25vw+15vh)] lg:w-9/10 object-cover overflow-hidden"
          ></img>
          <div className="flex ml-auto sm:w-full lg:w-9/10 mt-8">
            <img
              className="w-1/2 rounded-xl object-cover"
              src="./src/assets/study.png"
            />
            <img
              className="w-1/2 rounded-xl object-cover"
              src="./src/assets/study2.png"
            />
          </div>
        </div>
      </div>
      <div className="sm:flex sm:px-[calc(5vw+5vh)]">
        <div className="px-5 my-auto sm:w-1/2">
          <img className="rounded-2xl" src="./src/assets/sttudy3.png" />
        </div>
        <div className="pt-10 sm:w-1/2">
          <p className="pb-10 text-center font-semibold sm:text-left text-base xl:pl-8 headertext font-opensans">
            Future-Proof your skills with the perfect courses
          </p>
          <p className="pb-10 text-center sm:text-left text-base xl:pl-8 text-[14px] font-opensans paratext">
            Stay ahead in a fast-changing world by investing in the right
            knowledge. Our expertly curated courses are designed to equip you
            with the in-demand skills you need to thrive—today and tomorrow.
          </p>
        </div>
      </div>
      <div className="flex space-y-10 sm:space-x-5 lg:space-x-10 justify-center px-3 sm:px-[calc(5vw+5vh)] pt-20 flex-wrap">
        {Array.isArray(courses)
          ? courses.map((c: any) => (
              <Course_card
                key={c.id}
                course={{
                  title: c.name,
                  description: c.description,
                  id: c.id,
                  rating: !(c.rating === null) ? c.rating : 0,
                }}
              />
            ))
          : null}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="buttonclass"
          onClick={() => {
            nav("/exploreCourses");
          }}
        >
          Explore more courses
        </button>
      </div>
      <div className="px-[calc(5vw+5vh)] text-center pt-40">
        <p className="p-5 text-center text-base font-semibold xl:pl-8 sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-opensans">
          Don't take our word for it. See for yourself
        </p>
        <div className="md:flex sm:justify-center place-items-center pt-4 pl-8">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <Testimonial className="mt-30 md:mt-auto" userid={`00${i + 1}`} />
            );
          })}
        </div>
      </div>
      <div className="p-20 text-center">
        <p>2025&copy; - AscendEd&trade;</p>
      </div>
    </div>
  );
};

export { Home };
