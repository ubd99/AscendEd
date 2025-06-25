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
        path: "user",
        element: <RootLayout />,
        errorElement: <FourOhFour />,
        children: [
          {
            path: "dashboard",
            element: <UserDashboard />,
          },
        ],
        loader: () => {
          const raw = localStorage.getItem("user-store");
          if (raw) {
            const parsed = JSON.parse(raw!);
            const email = parsed?.state?.email;
            console.log("email is ", email);
            if (typeof email === "string" && email.includes("@")) {
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
            element: <AddCourse/>
          }
        ],
        loader: () => {
          const raw = localStorage.getItem("user-store");
          if (raw) {
            const parsed = JSON.parse(raw!);
            const email = parsed?.state?.email;
            console.log("email is ", email);
            if (typeof email === "string" && email.includes("@")) {
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
