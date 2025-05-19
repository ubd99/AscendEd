import { Link } from "react-router-dom"

interface testInfo{
    imgSrc : string,
    name : string,
    description : string,
    rating : number,
    className? : string,
    link?: string
}

const Testimonial = ({imgSrc, name, description, rating, className="", link="/"}: testInfo) =>{
    return (
        <div className={`sm:flex justify-center text-center rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl p-3 xl:p-6 w-50 md:w-70 lg:w-80 xl:w-90 xl:h-100 ${className}`}>
            <Link to={link}>
                <img src={imgSrc} className="rounded-full mx-auto w-50 shadow-md shadow-black"></img>
                <p className="font-bold pt-4">{name}</p>
                <p className="italic xl:pt-4">{description}</p>
                <p className="xl:pt-4">{`Rating: ${rating}`}</p>
            </Link>
        </div>
    )
}
export {Testimonial}