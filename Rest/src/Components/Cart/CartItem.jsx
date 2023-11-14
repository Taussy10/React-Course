import {AiFillDelete} from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {GrSubtractCircle  } from "react-icons/gr";

const CartItem = ({image,name,price}) => {
  return (
    // Card
    <div className=" flex gap-2 mb-3  shadow-md rounded-lg p-1">
{/* Image */}
<div className="">
  <img className=" w-[50px]  h-[50px]" src= {image} alt="" />
</div>

{/* Features */}
<div className="">
  {/* upper */}
  <div className=" flex justify-between gap-[6.75rem]">
  <h1 className="   text-gray-800 font-semibold">{name}</h1>
  <AiFillDelete className=" absolute right-4 hover:text-red-500 "/>
  </div>
{/* Lower */}
  <div className=" flex justify-between ">
    <span className=" text-green-500"> ₹{price}</span>
    {/* Inc/Dec comp */}
    <div className=" flex   absolute right-0 items-center "> 
    
    <GrSubtractCircle className="  mx-1     font-bold  rounded-lg hover:bg-red-500 cursor-pointer "/>
   <span className="  font-semibold  text-green-500">1</span> 
   <AiOutlinePlusCircle className=" font-bold   text-gray-700 mx-1 rounded-lg  cursor-pointer hover:bg-green-500 "/> 
    </div>
  </div>
</div>
</div>









    // <div className=" font-bold w-[250px] p-5    bg-white flex flex-col gap-2 
    //  rounded-lg
    // ">
    // <img  src='' alt="sdfsd"
    // className=" w-auto  h-[130px] hover:scale-110 rounded-lg cursor-grab
    //  transition-all duration-500 ease-in-out"/>

    // <div className="  flex justify-between">
    //   <h1>{name}</h1>
    //   {/* ctrl+alt+4 for rupee */}
    //   <span className=" text-green-600">
    //     ₹{}</span>
    // </div>
    // <div className=" text-sm font-normal">
    //   <p>{}...</p>

    // <div className=" flex justify-between">
    //   <span className=" flex items-center  gap-2 font-bold"><BiSolidStar className=" text-yellow-500"/> {}</span>
    //   <button className=" bg-green-500 border rounded-lg   p-1 text-white hover:bg-green-600">Add to cart</button>
    //   </div>
    // </div>
    // </div>
  )
}

export default CartItem