import {Navbar} from './Navbar'
const Home = ()=>{
    return (
        <div className='h-screen w-full'>
            <Navbar/>
            <div className='bg-blue-700 h-[clamp(40vh,_60vh,_60vh)] relative'>
                <img src='./src/assets/Home.png' className='h-[clamp(30vh,_40vh,_40vh)] w-[clamp(20vw,_30vw,_30vw)] absolute top-[clamp(5vh,_9.5vh,_9.5vh)] left-[clamp(60vw,_70vw,_70vw)] pr-[clamp(10vw)]'></img>
                <p className='text-white text-[clamp(1vw,_1.8vw,_1.8vw)] font-semibold absolute font-opensans left-[clamp(5vw,_10vw,_10vw)] top-[clamp(10vh,_20vh,_20vh)] italic'>Courses that help you grow.</p>
                <p>Unlock your potential—learn anytime, anywhere. Expert-led online courses designed to elevate your skills and your future.</p>
            </div>
        </div>
    )
}

export {Home}
