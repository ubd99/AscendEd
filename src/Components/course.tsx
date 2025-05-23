import { useParams } from "react-router-dom"
import { courses } from "../DB/mockDB"
import { Navbar } from "./Navbar";
import { Rating } from "./rating";

const Course = () => {
    const param = useParams();
    const id = param.id;
    const course = courses.find((c) => c.id === id)
    return(
        <div className="h-screen">
            <Navbar/>
            <div  className="bg-purple-950 w-full min-h-full flex justify-center p-10">
                <div className="flex text-center md:text-left justify-center md:justify-start bg-gray-900 my-auto w-7/8 min-h-full rounded-4xl p-8 md:p-15">
                    <div className="w-3/4 md:pr-5 xl:pr-20 text-center md:text-left md:block">
                        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-opensans object-center">{course?.name}</p>
                        <p className="text-base md:text-md lg:text-xl xl:text-2xl font-opensans pt-4">{course?.desc}</p>
                        <Rating className="pt-3 xl:text-xl" rate={typeof course?.rating === "number" ? course?.rating : 0} label={true}/>
                        <div className="pt-4 xl:pt-8 w-full">
                            <button className="buttonclass mx-auto"><p className="font-opensans">Get Started</p></button>
                        </div>
                    </div>
                    <div className="w-1/2 hidden md:block">
                        <img src={`.${course?.ImgSrc}`} className="w-full rounded-3xl"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Course}