import { Link } from "react-router-dom"
import { Sidebar } from "./sidebar"

const Navbar = () => {
    return(
        <div className=" bg-black sm:h-5 md:h-10 lg:h-15 pb-[1vh] sm:min-h-10 overflow-auto">
            <nav className="flex space-x-6 sm:pt-0.5 md:pt-1 lg:pt-1">
                <Link to="/"><p className="logo pl-2">AscendED</p></Link>
                <p className="italic font-opensans pt-[1.5vh] mx-auto text-[0.8rem] sm:text-sm md:text-md lg:text-lg xl:text-xl sm:p-0 sm:m-auto">Boost your career</p>
                <div className="hidden sm:flex justify-end ml-auto space-x-8 pr-2 sm:pl-5">
                    <Link to="/"><p className="navbarText">Explore Courses</p></Link>
                    <Link to="/about"><p className="navbarText">About AscendEd</p></Link>
                    <Link to="/"><p className="navbarText">Sign in</p></Link>
                </div>
                <div className="sm:hidden justify-end ml-auto pr-3">
                    <Sidebar/>
                </div>
            </nav>
        </div> 
    )
}
export {Navbar}