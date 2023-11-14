
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

import UserContextProvider from './Context/UserContextProvider'


// What is context API: to pass props without writing a lot of time from one comp to another

// why to use it suppose you have a Comp and inside that comp there are 5 another comp so if you want to send data via props then you have to give props to another comp to another time basically 5 times this concept called prop drilling cause we are drilling just like drilling for nails in wall

// How to use context API: we make global varialbe and put props value into it since it's global so it can be acessed everywhere you don't have to write 5 times 

// context API is part of react and we have altternative of it such as Redux a 3rd party library
function App() {


  return (
    <>
    {/* We didn't use self cosing cause we will wrapp every comp so the data can be provide */}
    <UserContextProvider>
      <Login/> 
      <Profile/> 
    </UserContextProvider>
<h1>Hellos</h1>
    </>
  )
}

export default App
