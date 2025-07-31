import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {  
  
  return (
    <div className="bg-purple-200 w-full py-[10vh] px-[7vw] h-auto">
      <div className="bg-white rounded-2xl h-max">
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App
