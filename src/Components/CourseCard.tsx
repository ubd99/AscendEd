import { Link } from "react-router-dom"

interface courseinfo{
    imgSrc : string,
    name : string,
    description : string,
    rating : number,
    className? : string,
    link?: string
}

const Course_card = ({imgSrc, name, description, rating, className="", link="/"}: courseinfo) =>{
    return (
        <div className={`rounded-lg mx-auto md:rounded-md lg:rounded-lg xl:rounded-xl p-3 xl:p-6 w-50 md:w-70 md:h-90 lg:w-80 xl:w-90 xl:h-100 bg-purple-900 ${className}`}>
            <Link to={link}>
                <img src={imgSrc} className=" w-full h-40 sm:h-48 md:h-50 xl:h-55 rounded-xl shadow-md shadow-black"></img>
                <p className="font-bold pt-4">{name}</p>
                <p className="italic xl:pt-4">{description}</p>
                <p className="xl:pt-4">{`Rating: ${rating}`}</p>
            </Link>
        </div>
    )
}
export {Course_card}