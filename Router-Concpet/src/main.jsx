import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'


// another way to write
// const router = createBrowserRouter([{
//   // fixed comps will be render cause it's fixed in Layout.jsx also layout is main comp
// path: '/',
// element: <Layout/>,
// children:[
// {
//   path:'/home',
//   element: <Home/>
// },
// {
//   path:'/about',
//   element: <About/>
// },
// {
//   path:'/contact',
//   element: <Contact/>
// },

// ]

// }


// ])


const router =createBrowserRouter(
  createRoutesFromElements(
    // Main Route that will contain every child Route
    <Route path='/' element= {<Layout/>} >
      <Route path='/home' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* You don't need App.jsx */}
    {/* <App /> */}
  </React.StrictMode>,
)
