import {Navbar} from './Navbar';
import { Course_card } from './CourseCard';
import { Testimonial } from './Testimonial';
const Home = ()=>{
    return (
        <div className='h-screen w-full'>
            <Navbar/>
            <div className='bg-purple-950 text-center p-[calc(2vh+2vw)] lg:px-[calc(5vw+5vh)] lg pb-0 sm:flex sm:text-left'>
                <div className='sm:w-[50vw] my-auto space-y-[2.5vh]'>
                    <p className='text-white italic font-bold font-opensans sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Courses that help you grow</p>
                    <p className='text-white text-[14px] italic font-opensans sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Unlock your potential -<br/>learn anytime, anywhere.<br/>Expert-led online courses designed to elevate your skills and your future.</p>               
                </div>
                <div className='w-full flex justify-end'>
                    <img src='./src/assets/st-home.png' className="mx-auto sm:mx-0 sm:ml-auto h-auto w-[calc(20vw+30vh)] sm:w-[calc(20vw+15vh)] md:w-[calc(25vw+15vh)] lg:w-[calc(15vw+18vh)] pt-[4vh] object-cover overflow-scroll"></img>
                </div>
            </div>
            <p className='p-5 pb-10 text-center sm:text-left text-base xl:pl-8 sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-opensans'>Future-Proof your skills with the perfect courses</p>
            <div className='md:flex p-4 space-y-[5vh] sm:space-x-8 lg:space-x-15 xl:space-x-20 justify-center overflow-x-auto'>
                <Course_card imgSrc='./src/assets/AI.png' name='Artificial Intelligence' description='The best AI course for beginners.' rating={4.9}/>
                <Course_card imgSrc='./src/assets/Py.png' name='Programming in Python' description='Learn Python from scratch.' rating={5}/>
                <Course_card className='md:hidden lg:block'imgSrc='./src/assets/CY.jpg' name='Cybersecurity' description='Cyber-security made easy' rating={4.6}/>
            </div>
            <p className='p-5 text-center sm:text-left text-base xl:pl-8 sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-opensans'>Don't take our word for it. See for yourself</p>
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
