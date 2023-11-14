import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Sucess from "./Pages/Sucess"
import Error from "./Pages/Error"



function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/sucess" element={<Sucess/>}/>
{/* / default first thing that will display = home and /* anything you write except that already assigned example: /sucess = No error  */}
<Route path="/*" element={<Error/>}/>

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
