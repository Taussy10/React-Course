import './App.css'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './Comps/Home/Home'
import Header from './Comps/Header/Header'

function App() {
  return (
    <>  
   {/* Router Wraps your entire application just like app.jsx*/}
    <Router>
      {/* <Header /> component (or any other components unrelated to routing(You should know meaning of routing)) should be placed outside the <Routes> component and the <Router> that's why Navbar isn't part of routing */}
      <Header/>
      {/*This component acts as a container for all your route */}
     <Routes>
        {/* Route is for indviual comps(Nav-Links) where you wanna go */}
      <Route path='/' element={<Home/>} />
     </Routes>
    </Router>
   
    </>
  )
}

export default App
 