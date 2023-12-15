import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Home from "./Pages/Home"
import Success from "./Pages/Success"
import Error from "./Pages/Error"
 {/*  anything you write except that already assigned example: /sucess = No error but /Chuha = error  */ }
const App = () => {
  return (
<BrowserRouter>
<Routes>
  {/* Every route path can be written in both small and capital first letter but by convention always write small letter*/}
  <Route path="/" element={<Home/>}  />
  <Route path="/success" element={<Success/>}  />
  <Route path="/*" element={<Error/>}  />
</Routes>
</BrowserRouter>    
  )
}

export default App