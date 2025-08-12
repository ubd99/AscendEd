import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { useCourse } from "../stores/useCourse";
import { Course_card } from "../Components/CourseCard";

const ExploreCourses = () => {
  const getPublicCourses = useCourse((state) => state.getPublicCourses);
  const courses = useCourse((state) => state.courses);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getPublicCourses(0);
    };

    fetchCourses();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="p-[calc(2vh+2vw)]">
        <div className="text-center">
          <p className="headertext font-semibold text-purple-900">
            Take your pick.
            <br /> We've many courses for you to choose from
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-y-10 mt-20">
          {Array.isArray(courses)
            ? courses.map((c: any, i) => (
                <Course_card
                  course={{
                    id: c.id,
                    title: c.name,
                    description: c.description,
                  }}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export { ExploreCourses };
