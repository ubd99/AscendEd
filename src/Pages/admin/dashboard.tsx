import { Navbar } from "../../Components/Navbar";
import type { User } from "../../interfaces/User";
import { useAuthStore } from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useCourse } from "../../stores/useCourse";
import { FaStar } from "react-icons/fa";
import { useEnrollStore } from "../../stores/enrollStore";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const user: User = {
    f_name: useAuthStore((state) => state.f_name),
    l_name: useAuthStore((state) => state.l_name),
    email: useAuthStore((state) => state.email),
    uid: useAuthStore((state) => state.uid),
    password: "********",
  };
  const setUserData = useAuthStore((state) => state.setUserData);

  const date = new Date().getDate();
  const last7Days = [
    date - 6,
    date - 5,
    date - 4,
    date - 3,
    date - 2,
    date - 1,
    `Today (${date})`,
  ];

  const getWeeklyEnrollments = useEnrollStore(
    (state) => state.getWeeklyEnrollments
  );
  const nav = useNavigate();
  const text = "text-white font-opensans text-sm font-semibold";
  const options = {
    scales: {
      x: {
        ticks: { color: "#000" },
      },
      y: {
        ticks: { color: "#000" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "#000" },
      },
    },
  };
  const getPublicCourses = useCourse((state) => state.getPublicCourses);
  const courses = useCourse((state) => state.courses);
  useEffect(() => {
    try {
      const fetchCourses = async () => {
        const res = await getPublicCourses(8);
        const eRes = await getWeeklyEnrollments();
      };
      fetchCourses();
    } catch (e) {
      console.log("Error in getPublicCourse (useEffect):", e);
    }
  }, []);
  const enrolls: any = useEnrollStore((state) => state.weeklyEnrollments);
  return (
    <div>
      <Navbar />
      <div className="p-[calc(3vh+3vw)]">
        <div className="flex items-stretch">
          <div className="w-1/2 px-10 flex flex-col justify-between space-y-10">
            <div className="bg-purple-600 shadow-black rounded-4xl p-7 shadow">
              <div className="flex overflow-hidden">
                <div className="w-4/7 text-wrap break-words">
                  <p className="headertext text-white pb-1">{`${user.f_name} ${user.l_name}`}</p>
                  <p className="text-white font-opensans text-sm font-semibold ml-1">
                    Administrator
                  </p>
                  <div className="pr-2 pt-1 pl-1">
                    <p className="font-semibold italic font-opensans text-xs text-white">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="w-3/7 h-full flex items-center">
                  <img
                    src="../../src/assets/customer.jpg"
                    className="rounded-full h-full mx-auto my-auto"
                  />
                </div>
              </div>
              <div className="flex pt-10 justify-between">
                <button className="buttonclass">Edit Profile</button>
                <button className="buttonclass">Settings</button>
                <button
                  className="buttonclass"
                  onClick={() => {
                    setUserData({
                      f_name: " ",
                      l_name: " ",
                      email: " ",
                      password: " ",
                      token: " ",
                      isLoggedIn: false,
                      uid: " ",
                    });
                    localStorage.clear();
                    nav("/");
                  }}
                >
                  Logout
                </button>
              </div>
            </div>

            <div className="p-5 bg-purple-400 rounded-4xl shadow grow">
              <Bar
                options={options}
                data={{
                  labels: last7Days,
                  datasets: [
                    {
                      label: "New Enrollments (Last 7 Days)",
                      data: enrolls
                        ? [
                            enrolls["tMinus6"],
                            enrolls["tMinus5"],
                            enrolls["tMinus4"],
                            enrolls["tMinus3"],
                            enrolls["tMinus2"],
                            enrolls["tMinus1"],
                            enrolls["tMinus0"],
                          ]
                        : [0, 0, 0, 0, 0, 0, 0],
                      backgroundColor: "rgba(120,100,50,1)",
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="w-1/2 px-10 flex justify-between flex-col space-y-10">
            <div className="p-5 bg-purple-400 rounded-4xl shadow">
              <p className="paratext font-semibold">Course Management</p>
              <div className="flex mt-10 grow justify-between">
                <button
                  className="buttonclass"
                  onClick={() => {
                    console.log("nav fired");
                    nav("/admin/addCourse");
                  }}
                >
                  Add a new course
                </button>
                <button
                  className="buttonclass"
                  onClick={() => {
                    nav("/admin/manageCourses");
                  }}
                >
                  Manage Courses
                </button>
              </div>
            </div>
            <div className="p-5 bg-purple-500 rounded-4xl shadow grow">
              <p className="paratext font-semibold">Recent Course Stats</p>
              <div className="overflow-scroll scrollbar-hidden">
                {Array.isArray(courses)
                  ? courses.map((c: any) => {
                      return (
                        <div className="my-4 flex justify-between">
                          <div className="w-1/3 flex items-center">
                            <p className="font-semibold my-auto">{c.name}</p>
                          </div>
                          <div className="w-1/3 flex justify-center">
                            <FaStar className="my-auto text-yellow-400" />{" "}
                            <p className="font-semibold my-auto ml-2">
                              {c.rating ? c.rating : 0}
                            </p>
                          </div>
                          <div className="w-1/3 flex flex-col justify-center">
                            <p className="font-semibold mx-auto">Enrolled:</p>
                            <p className="mx-auto">{c.enrolls}</p>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdminDashboard };
