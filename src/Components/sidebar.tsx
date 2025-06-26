import { useAuthStore } from "../stores/useAuthStore";
import { useSidebarStore } from "../stores/usesidebar";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggle = useSidebarStore((state) => state.toggleSidebar);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isAdmin = useAuthStore((state)=> state.isadmin);
  const nav = useNavigate();
  return isOpen ? (
    <div className="ml-auto justify-end text-end pb-3">
      <button onClick={toggle}>
        <p className="logo">☰</p>
      </button>
      <Link to="/about">
        <p className="navbarText">About AscendEd</p>
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
          <p className="navbarText">Sign in</p>
        </Link>
      )}
    </div>
  ) : (
    <div>
      <button onClick={toggle}>
        <p className="logo">☰</p>
      </button>
    </div>
  );
};

export { Sidebar };
