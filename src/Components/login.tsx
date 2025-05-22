import { Navbar } from "./Navbar"

const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center w-full h-screen">
                <img src="./src/assets/signin.png" className="hidden sm:block w-[calc(25vw+25vh)] h-[calc(15vw+15vh)] my-auto"></img>
                <div className="w-1/2 text-center my-auto">
                    <p className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-purple-500">Let the journey begin.<br/>You can start by signing in</p> 

                </div>
            </div>
        </div>
    )
}

export {Login}