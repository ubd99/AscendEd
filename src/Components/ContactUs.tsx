import { Navbar } from "./Navbar"

const ContactUs = () => {
    return (
        <div>
            <Navbar/>
            <div className="h-[50vh] max-h-[22rem] w-full bg-purple-950 items-center justify-center flex">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-opensans font-bold">Contact Us</p>
            </div>
            <div className="text-center items-center flex flex-wrap">
                <div className="contactDiv">
                    <p className="text-lg font-bold pb-3 sm:text-xl md:text-2xl">For Learners</p>
                    <hr className="w-1/2 sm:w-3/4 md:w-5/6 mx-auto text-gray-400"></hr>
                    <p className="text-md font-opensans pt-4">learn@ascended.com</p>
                </div>
                <div className="contactDiv">
                    <p className="text-lg font-bold pb-3 sm:text-xl md:text-2xl">For Instructors</p>
                    <hr className="w-1/2 sm:w-3/4 md:w-5/6 mx-auto text-gray-400"></hr>
                    <p className="text-md font-opensans pt-4">instruct@ascended.com</p>
                </div>
                <div className="contactDiv">
                    <p className="text-lg font-bold pb-3 sm:text-xl md:text-2xl">For Business</p>
                    <hr className="w-1/2 sm:w-3/4 md:w-5/6 mx-auto text-gray-400"></hr>
                    <p className="text-md font-opensans pt-4">business@ascended.com</p>
                </div>
                <div className="contactDiv">
                    <p className="text-lg font-bold pb-3 sm:text-xl md:text-2xl">For Partners and Affiliates</p>
                    <hr className="w-1/2 sm:w-3/4 md:w-5/6 mx-auto text-gray-400"></hr>
                    <p className="text-md font-opensans pt-4">partner@ascended.com</p>
                </div>
                <div className="contactDiv">
                    <p className="text-lg font-bold pb-3 sm:text-xl md:text-2xl">For Investors</p>
                    <hr className="w-1/2 sm:w-3/4 md:w-5/6 mx-auto text-gray-400"></hr>
                    <p className="text-md font-opensans pt-4">invest@ascended.com</p>
                </div>
                <div className="contactDiv">
                    <p className="text-lg font-bold pb-3 sm:text-xl md:text-2xl">For Investors</p>
                    <hr className="w-1/2 sm:w-3/4 md:w-5/6 mx-auto text-gray-400"></hr>
                    <p className="text-md font-opensans pt-4">invest@ascended.com</p>
                </div>                  
            </div>
            <div className="pt-[10vh] text-xs text-center">
                <p>2025 - AscendEd&trade;</p>
            </div> 
        </div>
    )
}

export {ContactUs}