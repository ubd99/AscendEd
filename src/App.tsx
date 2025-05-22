import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { ContactUs } from "./Components/ContactUs";
import { Login } from "./Components/login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/signin" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
