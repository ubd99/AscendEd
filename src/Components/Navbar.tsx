import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className=" bg-black h-[clamp(50px,_11vh,_11vh)] overflow-auto">
            <nav className="flex space-x-6 pt-[clamp(0.3vw,_0.3vw,_0.3vw)]">
                <Link to="/"><p className="logo">AscendED</p></Link>
                <p className="text-white text-[clamp(10px,_1.25vw,_1.25vw)] font-opensans pt-[clamp(0.5vh,_2vh,_2vh)] pl-[clamp(2vw,_12vw,_12vw)] pr-[clamp(3vw,_15vw,_15vw)] italic">Boost your career</p>
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