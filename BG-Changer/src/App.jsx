// import Card from './Components/Card'
import { useState } from 'react'
import './App.css'
function App() {
 const[color,  setColor] = useState("olive")

 

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  < div className="flex flex-wrap justify-center  shadow-lg bg-white px-3 py-2 gap-5">
    <button className='outline-none rounded-md'
    //onClick={setColor('red')}
    /* We can't put like this cause 
     by this you are invoking the function right after Component renders but we want after Component render and onlcick execute then setColor should execute that is why callBack function will execute after Component renders and when onlcick will execute then setColor will execute */
     /*so here two works are happening
     1. Component render: UI updation 
     2. onClick: in UI you click the button that's why two func 1.callBack 2. setColor  callBack is for Component render and setColor is for onClick*/
    onClick={() => setColor('red')}
   
    style={{backgroundColor:'red'}}
    >Red</button>
    <button className='outline-none rounded-md'
    onClick={() => setColor('green')}
    style={{backgroundColor:'green'}}
    >Red</button>
    <button className='outline-none rounded-md'
    onClick={() => setColor('yellow')}
    style={{backgroundColor:'yellow'}}
    >Red</button>
  </div>
</div>
</div>
  
    </>
  )
}

export default App
