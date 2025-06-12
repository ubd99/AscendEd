import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { ContactUs } from "./Pages/ContactUs";
import { Login } from "./Pages/login";
import { Course } from "./Pages/course";
import { Signup } from "./Pages/signup";

function App() {

  return (
    <div className="bg-purple-200 w-full py-[10vh] px-[7vw] h-auto">
      <div className="bg-white rounded-2xl h-max">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/course/:id" element={<Course/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
