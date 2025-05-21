import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { ContactUs } from "./Components/ContactUs";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
