import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className=" bg-black sm:h-5 md:h-10 lg:h-15 min-h-10 overflow-auto">
            <nav className="flex space-x-6 sm:pt-0.5 md:pt-1 lg:pt-1">
                <Link to="/"><p className="logo pl-2">AscendED</p></Link>
                <p className="text-white whitespace-nowrap lg:text-xl md:text-base sm:text-sm text-[12px] font-opensans pt-2 sm:pt-1.3 md:pt-1 lg:pt-3 lg:pl-64 md:pl-40 sm:pl-20 sm:pr-1 md:pr-7 lg:pr-10 italic">Boost your career</p>
                <div className="justify-end flex ml-auto space-x-8 pr-2 sm:pl-5">
                    <Link to="/"><p className="navbarText">Explore Courses</p></Link>
                    <Link to="/about"><p className="navbarText">About AscendEd</p></Link>
                    <Link to="/"><p className="navbarText">Sign in</p></Link>
                </div>
            </nav>
        </div> 
    )
}
export {Navbar}