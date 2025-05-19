import {Navbar} from './Navbar';
import { Course_card } from './CourseCard';
import { Testimonial } from './Testimonial';
const Home = ()=>{
    return (
        <div className='h-screen w-full'>
            <Navbar/>
            <div className='bg-blue-700 h-80 xl:h-120 relative'>
                <img src='./src/assets/Home.png' className="absolute w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-[180px] sm:h-[200px] md:h-[240px] xl:h-[350px] right-1 md:right-7 lg:right-20 top-13 md:top-10 object-cover rounded-md"></img>
                <p className='text-white text-[14px] sm:text-base md:text-xl xl:text-3xl italic font-bold font-opensans top-15 md:top-12 xl:top-20 left-3 sm:left-10 md:left-15 xl:left-40 absolute'>Courses that help you grow</p>
                <p className='text-white text-[14px] sm:text-base md:text-[19px] xl:text-2xl italic font-normal font-opensans top-25 xl:top-32 left-5 sm:left-11 md:left-16 xl:left-40 w-45 md:w-60 xl:w-100 absolute'>Unlock your potential -<br/>learn anytime, anywhere.<br/>Expert-led online courses designed to elevate your skills and your future.</p>               
            </div>
            <p className='p-5 text-base xl:pl-8 sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-opensans'>Future-Proof your skills with the perfect courses</p>
            <div className='flex p-4 space-x-8 lg:space-x-15 xl:space-x-20 justify-center overflow-x-auto'>
                <Course_card imgSrc='./src/assets/AI.png' name='Artificial Intelligence' description='The best AI course for beginners.' rating={4.9}/>
                <Course_card imgSrc='./src/assets/Py.png' name='Programming in Python' description='Learn Python from scratch.' rating={5}/>
                <Course_card className='hidden sm:block' imgSrc='./src/assets/CY.jpg' name='Cybersecurity' description='Cyber-security made easy' rating={4.6}/>
                <Course_card className='hidden lg:block' imgSrc='./src/assets/DS.png' name='Data Science' description='The perfect Data-Science Guide' rating={4.2}/>
            </div>
            <p className='p-5 text-base xl:pl-8 sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-opensans'>Don't take our word for it. See for yourself</p>
            <div className='md:flex sm:justify-center place-items-center pt-4 pl-8'>
                <Testimonial className='mt-10 md:mt-auto' imgSrc='./src/assets/customer.jpg' name='Arthur Morgan' description='The best AI course that I have taken.' rating={5}/>
                <Testimonial className='mt-30 md:mt-auto' imgSrc='./src/assets/customer.jpg' name='Joel Miller' description='Truly the best experience.' rating={5}/>
                <Testimonial className='mt-30 md:mt-auto' imgSrc='./src/assets/customer.jpg' name='Ned Luke' description='Cybersecurity has never felt easier' rating={5}/>
            </div>
            <div className='p-20 text-center'>
                <p>2025 - AscendEd&trade;</p>
            </div>
        </div>
    )
}

export {Home}
