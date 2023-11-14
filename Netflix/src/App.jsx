import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Comp/Home/Home'
import Navbar from './Comp/Navbar/Navbar'
function App() {


  return (
    <>
    {/* <Navbar /> component (or any other components unrelated to routing) should be placed outside the <Routes> component and the <Router> that's why Navbar isn't part of routing */}
    <Navbar/>
    {/* Router Wraps your entire application.*/}
    <Router>
    
    {/*This component acts as a container for all your route */}
    <Routes>
      {/* Route is for indviual comps(Nav-Links) where you wanna go */}
      <Route path='/' element={<Home/>}/>      
    </Routes>
    </Router>
    <h1>HEllo</h1>
    </>
  )
}

export default App
