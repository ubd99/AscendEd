import { Navbar } from "./Navbar"

const About = () =>{
    return(
        <div>
            <Navbar/>
            <div className='bg-purple-950 shadow-black h-100 sm:h-100 shadow-md md:h-120 lg:h-135 xl:h-105 relative'>
                <img src='./src/assets/student.png' className="absolute h-[350px] sm:h-[400px] md:h-[430px] lg:h-[540px] xl:h-[400px] right-0 md:right-7 lg:right-10 bottom-0 rounded-md"></img>
                <p className='text-white text-[14px] sm:text-[20px] md:text-xl lg:text-2xl xl:text-3xl italic font-bold font-opensans top-15 md:top-12 xl:top-15 left-3 sm:left-10 md:left-15 xl:left-40 absolute'>AscendEd - Where we make goals a reality.</p>
                <p className='text-white text-[14px] sm:text-base md:text-[19px] xl:text-2xl italic font-normal font-opensans top-25 xl:top-28 left-5 sm:left-11 md:left-16 xl:left-40 w-55 sm:w-73 md:w-80 lg:w-90 xl:w-170 absolute'>At our core, we believe that every ambition—big or small—deserves the right support to come to life. We're a team of thinkers, builders, and doers dedicated to turning vision into progress through creativity, strategy, and action. Whether you're starting from scratch or scaling up, we're here to help you move with clarity, confidence, and purpose. Because to us, success isn't just a destination—it's a journey we take together.</p>               
            </div>
            <div className="bg-purple-900 w-full h-100 lg:h-120 shadow-black shadow-2xl relative">
                <img src="./src/assets/instruct.png" className="h-75 md:h-90 lg:h-100 xl:h-110 absolute top-10 sm:left-10 lg:left-20 xl:left-40"/>
                <p className="absolute font-opensans italic text-base md:text-xl lg:text-2xl xl:text-3xl w-50 md:w-60 lg:w-80 xl:w-120 right-5 sm:right-15 lg:right-25 xl:right-40 top-20">Our <b>instructors</b> are more than just teachers — they're mentors dedicated to helping students succeed. With real-world experience and a passion for education, they bring clarity, support, and motivation to every step of the learning journey.</p>
            </div>
            <div className="bg-purple-950 w-full h-120">

            </div>
        </div>
    )
}

export {About}