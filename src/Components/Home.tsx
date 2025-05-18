import {Navbar} from './Navbar';
import { Course_card } from './CourseCard';
const Home = ()=>{
    return (
        <div className='h-screen w-full'>
            <Navbar/>
            <div className='bg-blue-700 h-80 xl:h-120 relative'>
                <img src='./src/assets/Home.png' className="absolute w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-[180px] sm:h-[200px] md:h-[240px] xl:h-[350px] right-1 md:right-7 lg:right-20 top-13 md:top-10 object-cover rounded-md"></img>
                <p className='text-white text-[14px] sm:text-base md:text-xl xl:text-3xl italic font-bold font-opensans top-15 md:top-12 xl:top-20 left-3 sm:left-10 md:left-15 xl:left-40 absolute'>Courses that help you grow</p>
                <p className='text-white text-[14px] sm:text-base md:text-[19px] xl:text-2xl italic font-normal font-opensans top-25 xl:top-32 left-5 sm:left-11 md:left-16 xl:left-40 w-45 md:w-60 xl:w-100 absolute'>Unlock your potential -<br/>learn anytime, anywhere.<br/>Expert-led online courses designed to elevate your skills and your future.</p>               
            </div>
            <p className='p-5 text-base font-opensans'>Future-Proof your skills with the perfect courses</p>
            <div className='flex p-4 space-x-8 lg:space-x-15 xl:space-x-25 justify-center'>
                <Course_card imgSrc='./src/assets/AI.png' name='Artificial Intelligence' description='The best AI course for beginners.' rating={4.9}></Course_card>
                <Course_card imgSrc='./src/assets/AI.png' name='Artificial Intelligence' description='The best AI course for beginners.' rating={4.9}></Course_card>
                <Course_card className='hidden sm:block' imgSrc='./src/assets/AI.png' name='Artificial Intelligence' description='The best AI course for beginners.' rating={4.9}></Course_card>
                <Course_card className='hidden lg:block' imgSrc='./src/assets/AI.png' name='Artificial Intelligence' description='The best AI course for beginners.' rating={4.9}></Course_card>
            </div>
        </div>
    )
}

export {Home}
