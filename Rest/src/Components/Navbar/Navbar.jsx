// import { data } from "autoprefixer"


const Navbar = () => {
  return (
    <nav className="flex  flex-col md:flex-row justify-between mx-6 py-3"> 

    <div>
      {/* By slice method we cut some text and shown only 17 characters */}
 <h1 className="  text-xl font-bold text-gray-600">{ 
 new Date().toUTCString().slice(0,17) } </h1> 
  
  <h1 className=" text-2xl font-bold">Corona Food Outlet</h1>
    </div>


    <div className="">
      <input className=" border 
       py-2 border-gray-400 text-sm  rounded-lg outline-none  w-full 
        md:w-[25vw]" type="search" name="" id="" placeholder="Search Here" autoComplete="off" />
    </div>
    </nav>
  )
}

export default Navbar