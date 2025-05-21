import { Navbar } from "./Navbar"

const About = () =>{
    return(
        <div>
            <Navbar/>
            <div className='bg-purple-950 shadow-black h-90 sm:h-100 shadow-md md:h-120 lg:h-135 xl:h-110 relative'>
                <img src='./src/assets/student.png' className="absolute h-[calc(25vw+25vh)] max-h-[23rem] sm:h-[calc(28vw+28vh)] sm:min-h-[20rem] sm:max-h-[25rem] md:h-[calc(35vw+35vh)] md:max-h-[29rem] lg:h-[540px] xl:h-[400px] right-0 md:right-7 lg:right-10 bottom-0 rounded-md"></img>
                <p className='text-white text-sm w-[calc(20vw+20vh)] sm:w-[calc(40vw+40vh)] sm:text-xl md:text-xl lg:text-2xl xl:text-3xl italic font-bold font-opensans top-8 sm:top-20 md:top-12 lg:top-25 xl:top-20 left-3 sm:left-10 md:left-15 xl:left-40 absolute'>AscendEd - Where we make goals a reality.</p>
                <p className='text-white text-[14px] sm:text-base md:text-[19px] xl:text-2xl italic font-normal font-opensans top-20 sm:top-30 lg:top-39 xl:top-30 left-5 sm:left-11 md:left-16 xl:left-40 w-[calc(12vw+12vh)] sm:w-73 md:w-80 lg:w-90 xl:w-170 absolute'>Every ambition deserves the right support. We’re a team of creatives and strategists turning vision into progress. From first steps to scaling up, we move with purpose—together.</p>               
            </div>
            <div className="bg-purple-900 w-full h-100 lg:h-120 shadow-black shadow-2xl relative">
                <img src="./src/assets/instruct.png" className="h-75 md:h-90 lg:h-100 xl:h-110 absolute bottom-0 left-0 sm:left-10 lg:left-20 xl:left-40"/>
                <p className="absolute font-opensans italic text-base md:text-xl lg:text-2xl xl:text-3xl w-[calc(15vw+15vh)] md:w-60 lg:w-80 xl:w-120 right-5 sm:right-15 lg:right-25 xl:right-40 top-10 lg:top-15 xl:top-20">Our <b>instructors</b> are more than just teachers — they're mentors dedicated to helping students succeed. With real-world experience and a passion for education, they bring clarity, support, and motivation to every step of the learning journey.</p>
            </div>
            <div className="bg-purple-950 w-full text-center">
                <img src="./src/assets/plan.png" className="w-[calc(15vw+15vh)] mx-auto pt-10"></img>
                <p className="font-bold text-md sm:text-xl md:text-2xl lg:3xl pt-10">Easy and Affordable Plans</p>
                <p className="text-md sm:text-xl md:text-2xl lg:3xl p-5">Whether you’re just starting out or growing fast, our plans keep things affordable.</p>
            </div>
            <div className="bg-black w-full text-center">
                <p>2025 - AscendEd&trade;</p>
            </div>
        </div>
    )
}

export {About}