import { Link } from "react-router-dom"

interface ICourseInfo{
    imgSrc : string,
    name : string,
    description : string,
    rating : number,
    className? : string,
    id? : string
   // onClick? : () => void
}

const Course_card: React.FC<ICourseInfo> = ({imgSrc, name, description, rating, className="", id=""}) =>{
    return (
                <div 
                /*style={{cursor: onClick ? 'pointer' : 'default'}}
                role={onClick ? 'button' : undefined}
                tabIndex={onClick ? 0 : undefined}
                onKeyDown={(e)=>{
                    if(e.key === 'Enter' || e.key === ' ' && onClick){
                        e.preventDefault();
                        onClick?.();
                    }
                }}
                onClick={onClick}*/
                className={`rounded-lg mx-auto md:rounded-md lg:rounded-lg xl:rounded-xl p-3 xl:p-6 w-50 md:w-70 md:h-90 lg:w-80 xl:w-90 xl:h-100 bg-purple-900 ${className}`}>
                <Link to={`/course/${id}`}>
                    <img src={imgSrc} className=" w-full h-40 sm:h-48 md:h-50 xl:h-55 rounded-xl shadow-md shadow-black"></img>
                    <p className="font-bold pt-4">{name}</p>
                    <p className="italic xl:pt-4">{description}</p>
                    <p className="xl:pt-4">{`Rating: ${rating}`}</p>        
                </Link>
                </div>
    )
}
export {Course_card}