import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCourse } from "../../stores/useCourse";
import type { ICourse } from "../../interfaces/Course";
import { Navbar } from "../../Components/Navbar";
import { Rating } from "../../Components/rating";
import { FaEdit } from "react-icons/fa";

const AdminCourse = () => {
  const param = useParams();
  const nav = useNavigate();
  const getCourse = useCourse((state) => state.getCourse);
  const getChapters = useCourse((state) => state.getChapters);
  const course: ICourse = {
    title: useCourse((state) => state.title),
    description: useCourse((state) => state.description),
  };
  const [name, setName] = useState<boolean>(false);
  const chaps = useCourse((state) => state.chapters);
  useEffect(() => {
    const fetchCourse = async () => {
      const res = await getCourse(param.id as string);
      const chapRes = await getChapters(param.id as string);
    };

    fetchCourse();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-[calc(2vh+2vw)]">
        <div className="grid md:flex justify-center">
          <div className="order-2 md:order-1 md:w-1/2 items-stretch">
            <div className="flex">
              {name ? (
                <form>
                  <input type="text" placeholder="New name" />
                </form>
              ) : (
                <p className="font-opensans font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">{`Course: ${course?.title}`}</p>
              )}
              <button className="pl-5">
                <FaEdit
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setName(!name);
                  }}
                  className="text-purple-800"
                />
              </button>
            </div>
            <p className="font-opensans py-10 pr-10 text-base md:text-md lg:text-lg xl:text-xl">{`${course?.description}`}</p>
            <Rating
              className=""
              rate={typeof course?.rating === "number" ? course?.rating : 0}
              label={true}
            />

            <div className="py-10">
              <button className="buttonclass">Delete Course</button>
            </div>
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
        <div className="pt-5">
          <p className="paratext font-semibold">Course Phases</p>
        </div>
        <div className="mt-20 px-5 rounded-3xl shadow">
          <table className="table-fixed w-full border-separate border-spacing-y-10">
            <tbody>
              {Array.isArray(chaps) ? (
                chaps.map((c: any, i) => {
                  return (
                    <tr
                      className="rounded-xl shadow-sm shadow-black"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        nav(`/admin/course/module/${c.id}`);
                      }}
                    >
                      <td className="w-1/2 text-center p-2 text-purple-800 font-semibold">
                        {`Phase ${i + 1}`}
                      </td>
                      <td className="w-1/2 bordered font-semibold">{c.name}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>null</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <button
          className="buttonclass"
          onClick={() => {
            nav(`/admin/addPhase/${param.id}`);
          }}
        >
          Add Course Phase
        </button>
      </div>
      <div className="flex p-[calc(3vh+3vw)]">
        <p className="mx-auto">2025&copy; - Ascended&trade;</p>
      </div>
    </div>
  );
};

export { AdminCourse };
