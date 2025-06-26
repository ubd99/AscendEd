import { Navbar } from "../../Components/Navbar";
import type { User } from "../../interfaces/User";
import { useAuthStore } from "../../stores/useAuthStore";
import { data, useNavigate } from "react-router-dom";
import {
  Chart as ChartJs,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend
);

const UserDashboard = () => {
  const user: User = {
    f_name: useAuthStore((state) => state.f_name),
    l_name: useAuthStore((state) => state.l_name),
    email: useAuthStore((state) => state.email),
    uid: useAuthStore((state) => state.uid),
    password: "********",
  };
  const setUserData = useAuthStore((state)=> state.setUserData);
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
                    nav('/');
                  }}
                >
                  Logout
                </button>
              </div>
            </div>

            <div className="p-5 bg-purple-400 rounded-4xl shadow grow">
              <Doughnut data = {
                {
                  datasets: [
                    {
                      data: [75,25],
                      circumference: 180,
                      circular:true,
                      rotation: -90,
                    }
                  ]
                }
              } ></Doughnut>
            </div>
          </div>
          <div className="w-1/2 px-10 flex justify-between flex-col space-y-10">
            <div className="p-5 bg-purple-400 rounded-4xl shadow">
              <p className="paratext font-semibold">Recently Enrolled Courses</p>
              <div className="mt-3 grow justify-between">
                {Array.from({length:4}).map((_,i) => {
                  return <p>Course {i}</p>
                })}
              </div>
            </div>
            <div className="p-5 bg-purple-500 rounded-4xl shadow grow">
              <p className="paratext font-semibold">Recent Course Stats</p>
              {Array.from({ length: 10 }).map((_, i) => {
                return <p>Course {i}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserDashboard };
