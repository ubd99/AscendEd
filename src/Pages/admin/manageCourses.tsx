import { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar";
import { useCourse } from "../../stores/useCourse";
import { useNavigate } from "react-router-dom";

const CManage = () => {
  const nav = useNavigate();
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
      <div className="p-[calc(3vh+3vw)]">
        <div className="flex justify-between px-30">
          <div className="">
            <p className="font-semibold">Total Courses:</p>
            <p className="headertext font-semibold">10000</p>
          </div>
          <div className="">
            <p className="font-semibold">Enrollments:</p>
            <p className="headertext font-semibold">10000</p>
          </div>
          <div className="">
            <p className="font-semibold">Total videos:</p>
            <p className="headertext font-semibold">10000</p>
          </div>
        </div>
        <div className="mt-20 px-5 rounded-3xl shadow">
          <table className="table-fixed w-full border-separate border-spacing-y-10">
            <thead>
              <tr className="">
                <th className="w-1/5 text-purple-800">Title</th>
                <th className="w-1/5 bordered">Rating</th>
                <th className="w-1/5 bordered">Enrolled</th>
                <th className="w-1/5 bordered">Created on</th>
                <th className="w-1/5 bordered">Last Update</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(courses) ? (
                courses.map((c: any) => {
                  return (
                    <tr
                      className="rounded-xl shadow-sm shadow-black"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        nav(`/admin/courses/${c.id}`);
                      }}
                    >
                      <td className="w-1/5 text-center p-2 text-purple-800 font-semibold">
                        {c.name}
                      </td>
                      <td className="w-1/5 bordered font-semibold">
                        {c.rating}
                      </td>
                      <td className="w-1/5 bordered font-semibold">
                        {c.enrolls}
                      </td>
                      <td className="w-1/5 bordered font-semibold">
                        {c.createdAt}
                      </td>
                      <td className="w-1/5 bordered font-semibold">
                        {c.updatedAt}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { CManage };
