interface courseinfo{
    imgSrc : string,
    name : string,
    description : string,
    rating : number,
    className? : string,
}

const Course_card = ({imgSrc, name, description, rating, className=""}: courseinfo) =>{
    return (
        <div className={`rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl p-3 xl:p-6 w-50 md:w-70 lg:w-80 xl:w-90 bg-blue-900 ${className}`}>
            <img src={imgSrc} className=" w-full rounded-xl shadow-md shadow-black"></img>
            <p>{name}</p>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    )
}
export {Course_card}