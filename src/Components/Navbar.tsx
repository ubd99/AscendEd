import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className=" bg-black sm:h-5 md:h-10 lg:h-15">
            <nav className="flex space-x-6 sm:pt-0.5 md:pt-1 lg:pt-1.5">
                <Link to="/"><p className="logo">AscendED</p></Link>
                <p className="text-white text-[clamp(10px,_1.3vw,_20px)] font-opensans pt-[clamp(0.5vh,_2vh,_15px)] pl-[clamp(2vw,_12vw,_12vw)] pr-[clamp(3vw,_15vw,_15vw)] italic">Boost your career</p>
                <div className="justify-end flex ml-auto space-x-8 pr-2">
                    <Link to="/"><p className="navbarText">Explore Courses</p></Link>
                    <Link to="/"><p className="navbarText">About AscendEd</p></Link>
                    <Link to="/"><p className="navbarText">Sign in</p></Link>
                </div>
            </nav>
        </div> 
    )
}
export {Navbar}