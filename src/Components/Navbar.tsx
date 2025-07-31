import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { useAuthStore } from "../stores/useAuthStore";

const Navbar = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isAdmin = useAuthStore((state) => state.isadmin);
  const nav = useNavigate();
  return (
    <div className="bg-transparent flex items-center w-full px-8 sm:h-5 sm:min-h-20 md:h-10 lg:h-15 overflow-auto">
      <div className="w-full">
        <nav className="flex space-x-6 w-full pt-3 sm:pt-0.5 md:pt-1 lg:pt-1">
          <Link to="/">
            <div className="flex items-stretch">
              <img className="h-7 md:h-8 lg:h-9 xl:max-h-10" src="/src/assets/logo.png" />
              <p className="logo pl-2">AscendED</p>
            </div>
          </Link>
          <div className="hidden sm:flex justify-end w-full space-x-8 pr-2 sm:pl-5">
            <Link to="/about">
              <p className="navbarText">About Us</p>
            </Link>
            <Link to="/contact">
              <p className="navbarText">Contact Us</p>
            </Link>
            {isLoggedIn ? (
              <div
                onClick={() => {
                  if (isAdmin) {
                    nav("/admin/dashboard");
                  } else {
                    nav("/user/dashboard");
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <p className="navbarText">Dashboard</p>
              </div>
            ) : (
              <Link to="/signin">
                <p className="navbarText">Sign In</p>
              </Link>
            )}
          </div>
          <div className="sm:hidden justify-end ml-auto pr-3">
            <Sidebar />
          </div>
        </nav>
      </div>
    </div>
  );
};
export { Navbar };
