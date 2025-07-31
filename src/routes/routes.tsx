import { createBrowserRouter, redirect } from "react-router-dom";
import { Home } from "../Pages/Home";
import { FourOhFour } from "../Pages/fourohfour";
import { About } from "../Pages/About";
import { ContactUs } from "../Pages/ContactUs";
import { Login } from "../Pages/login";
import { Signup } from "../Pages/signup";
import { Course } from "../Pages/course";
import { UserDashboard } from "../Pages/user/dashboard";
import { RootLayout } from "../Components/rootLayout";
import { Test } from "../Pages/test";
import { AdminDashboard } from "../Pages/admin/dashboard";
import { AddCourse } from "../Pages/admin/addCourse";
import { CManage } from "../Pages/admin/manageCourses";
import { AdminCourse } from "../Pages/admin/adminCourse";
import { AddChapter } from "../Pages/admin/addChapter";
import { ExploreCourses } from "../Pages/exploreCourses";
import { ModulePage } from "../Pages/user/modulePage";
import { AddContent } from "../Pages/admin/addContent";
import { AdminModulePage } from "../Pages/admin/adminModulePage";
import { VideoPage } from "../Pages/user/videoPage";
import { AdminVideoPage } from "../Pages/admin/adminVideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <FourOhFour />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "course/:id",
        element: <Course />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "exploreCourses",
        element: <ExploreCourses />,
      },
      {
        path: "user",
        element: <RootLayout />,
        errorElement: <FourOhFour />,
        children: [
          {
            path: "dashboard",
            element: <UserDashboard />,
          },
          {
            path: "course/:courseId/:moduleId/content/:contentId",
            element: <VideoPage />,
          },
          {
            path: "course/module/:moduleId",
            element: <ModulePage />,
          },
        ],
        loader: () => {
          const raw = localStorage.getItem("user-store");
          if (raw) {
            const parsed = JSON.parse(raw!);
            const email = parsed?.state?.email;
            const isadmin = parsed?.state?.isadmin;
            console.log("email is ", email);
            if (!isadmin && typeof email === "string" && email.includes("@")) {
              return null;
            }
            return redirect("/404");
          }
          console.log("raw is ", raw);
          return redirect("/404");
        },
      },
      {
        path: "admin",
        element: <RootLayout />,
        errorElement: <FourOhFour />,
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "addCourse",
            element: <AddCourse />,
          },
          {
            path: "manageCourses",
            element: <CManage />,
          },
          {
            path: "courses/:id",
            element: <AdminCourse />,
          },
          {
            path: "course/module/:moduleId",
            element: <AdminModulePage />,
          },
          {
            path: "course/:courseId/:moduleId/content/:contentId",
            element: <AdminVideoPage/>
          },
          {
            path: "addPhase/:id",
            element: <AddChapter />,
          },
          {
            path: "addContent/:courseId/:chapterId",
            element: <AddContent />,
          },
        ],
        loader: () => {
          const raw = localStorage.getItem("user-store");
          if (raw) {
            const parsed = JSON.parse(raw!);
            const email = parsed?.state?.email;
            const isadmin = parsed?.state?.isadmin;
            console.log("email is ", email);
            if (isadmin && typeof email === "string" && email.includes("@")) {
              return null;
            }
            return redirect("/404");
          }
          console.log("raw is ", raw);
          return redirect("/404");
        },
      },
    ],
  },
]);

export { router };
