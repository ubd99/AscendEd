import { useSidebarStore } from "./states/usesidebar"
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isOpen = useSidebarStore((state) => state.isOpen);
    const toggle = useSidebarStore((state) => state.toggleSidebar);

    return isOpen ? (
        <div className="ml-auto justify-end text-end pb-3">
            <button onClick={toggle}><p className="logo">☰</p></button>
            <Link to="/"><p className="navbarText">Explore Courses</p></Link>
            <Link to="/about"><p className="navbarText">About AscendEd</p></Link>
            <Link to="/"><p className="navbarText">Sign in</p></Link>
        </div>
    ) : (
        <div>
            <button onClick={toggle}><p className="logo">☰</p></button>
        </div>
    );
}

export {Sidebar}