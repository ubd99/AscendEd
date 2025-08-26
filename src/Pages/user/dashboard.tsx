import { Navbar } from "../../Components/Navbar";
import type { User } from "../../interfaces/User";
import { useAuthStore } from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJs,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
import { useCourse } from "../../stores/useCourse";

ChartJs.register(CategoryScale, ArcElement, Tooltip, Legend);

const UserDashboard = () => {
  const user: User = {
    f_name: useAuthStore((state) => state.f_name),
    l_name: useAuthStore((state) => state.l_name),
    email: useAuthStore((state) => state.email),
    uid: useAuthStore((state) => state.uid),
    password: "********",
  };
  const courses = useCourse((state) => state.recentCourses);
  const getRecentCourses = useCourse((state) => state.getRecentCourses);
  const setUserData = useAuthStore((state) => state.setUserData);
  const checkResume = useCourse((state) => state.checkResume);
  const resume = useCourse((state) => state.resume);
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
  useEffect(() => {
    try {
      const uid = JSON.parse(localStorage.getItem("user-store")!)?.state?.uid;
      const fetchCourses = async () => {
        const res = await getRecentCourses(uid);
        const resume = await checkResume();
      };
      fetchCourses();
    } catch (e) {
      console.log("Error in UserDashboard(useEffect)", e);
    }
  }, []);
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
                    Student
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
              {resume ? (
                <div
                  className="flex bg-purple-950 rounded-2xl p-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    nav(
                      `/user/course/${resume.courseId}/${resume.chapterId}/content/${resume.id}`
                    );
                  }}
                >
                  <div></div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-1/2 px-10 flex justify-between flex-col space-y-10">
            <div className="p-5 bg-purple-400 rounded-4xl shadow">
              <p>something here</p>
            </div>
            <div className="p-5 bg-purple-500 rounded-4xl shadow grow">
              <p className="paratext font-semibold">Recent Course Stats</p>
              <div className="mt-3 grow justify-between">
                {Array.isArray(courses) ? (
                  courses.map((c: any) => (
                    <div className="flex justify-between items-center p-2 bg-purple-900 text-white rounded-xl m-1">
                      <p>{c.name}</p>
                      <div className="flex items-center bg-purple-950 pl-4 rounded-2xl">
                        <p className="mr-2">Completion</p>
                        <div className="rounded-full flex justify-center items-center w-11 h-11 bg-black">
                          <p>{parseInt(c.progress)}%</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>null</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserDashboard };
