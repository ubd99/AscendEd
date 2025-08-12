import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Rating } from "../Components/rating";
import { useCourse } from "../stores/useCourse";
import { useEffect, useState } from "react";
import type { ICourse } from "../interfaces/Course";
import { useAuthStore } from "../stores/useAuthStore";
import { useEnrollStore } from "../stores/enrollStore";
import { Module_card } from "../Components/ModuleCard";

const Course = () => {
  const param = useParams();
  const getCourse = useCourse((state) => state.getCourse);
  const getChapters = useCourse((state) => state.getChapters);
  const checkEnroll = useEnrollStore((state) => state.checkEnroll);
  const course = {
    title: useCourse((state) => state.title),
    description: useCourse((state) => state.description),
    rating: 0,
  };
  const enrolled = useEnrollStore((state) => state.enrolled);
  const chap = useCourse((state) => state.chapters);
  useEffect(() => {
    const fetchCourse = async () => {
      const raw = localStorage.getItem("user-store");
      const parsed = JSON.parse(raw!);
      const uid = parsed?.state?.uid;
      const token = parsed?.state?.token;
      const res = await getCourse(param.id as string);
      const chapRes = await getChapters(param.id as string);
      console.log("Enrolled is: ", enrolled);

      const enrollRes = await checkEnroll(uid, param.id!);
    };

    fetchCourse();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-[calc(2vh+2vw)]">
        <div className="grid md:flex justify-center">
          <div className="order-2 md:order-1 md:w-1/2 items-stretch">
            <p className="font-opensans font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">{`Course: ${course?.title}`}</p>
            <p className="font-opensans py-10 pr-10 text-base md:text-md lg:text-lg xl:text-xl">{`${course?.description}`}</p>
            {enrolled ? null : (
              <div>
                <Rating
                  className=""
                  rate={typeof course?.rating === "number" ? course?.rating : 0}
                  label={true}
                />
                <div className="py-10">
                  <CourseButton id={param.id} />
                </div>
              </div>
            )}
          </div>
          <div className="order-1 md:order-2 md:w-1/2 items-stretch">
            <img
              src={`https://${
                import.meta.env.VITE_AWS_BUCKET_NAME
              }.s3.amazonaws.com/uploads/coursetemps/${param.id}`}
              className="mx-auto mt-10 mb-20 md:mt-0 md:mb-auto md:w-3/4 md:h-full rounded-xl xl:rounded-4xl object-cover"
            />
          </div>
        </div>
        {enrolled ? (
          <div>
            <p className="headertext">Course Modules</p>
            <div className="flex flex-wrap mt-10 gap-10">
              {Array.isArray(chap)
                ? chap.map((c: any) => (
                    <Module_card
                      id={c.id}
                      courseId={param.id!}
                      module={{ title: c.name, description: c.description }}
                    />
                  ))
                : null}
            </div>
          </div>
        ) : (
          <div>
            <div className="py-10">
              <p className="paratext font-semibold">
                What you'll learn in this course:
              </p>
            </div>
            {Array.isArray(chap)
              ? chap.map((c: any, i) => (
                  <div className="text-center mb-10">
                    <p className="paratext font-semibold">{c.name}</p>
                    <p className="text-lg">{c.description}</p>
                  </div>
                ))
              : null}
          </div>
        )}
        <div className="hidden md:block lg:hidden bg-transparent w-0.5 mx-[calc(2.5vh+2.5vw)]"></div>
      </div>
      <div className="flex p-[calc(3vh+3vw)]">
        <p className="mx-auto">2025&copy; - Ascended&trade;</p>
      </div>
    </div>
  );
};

const CourseButton = ({ id = " " }) => {
  const raw = localStorage.getItem("user-store");
  const setEnrollee = useEnrollStore((state) => state.setEnrollee);
  const enroll = useEnrollStore((state) => state.enroll);
  const parsed = JSON.parse(raw!);
  const isadmin = parsed?.state?.isadmin;
  const uid = parsed?.state?.uid;
  const nav = useNavigate();
  console.log("from coursebutton: user is admin->", isadmin);
  const checkLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return checkLoggedIn ? (
    <div>
      {isadmin ? (
        <button
          className="buttonclass"
          onClick={() => {
            nav(`/admin/courses/${id}`);
          }}
        >
          Edit Course
        </button>
      ) : (
        <button
          className="buttonclass"
          onClick={async () => {
            try {
              setEnrollee(parsed?.state?.uid, id, parsed?.state?.token);
              console.log("Enrolling");
              await enroll(uid, id);
              nav("/");
              nav(`/course/${id}`);
            } catch (e) {
              console.log("Error in Enroll onClick()", e);
            }
          }}
        >
          Enroll now
        </button>
      )}
    </div>
  ) : (
    <button
      className="buttonclass"
      onClick={() => {
        nav("/signin");
      }}
    >
      Get Started
    </button>
  );
};

export { Course };
