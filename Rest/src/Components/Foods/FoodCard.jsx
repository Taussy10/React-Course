// /bi cause in starting of name Bi
import {BiSolidStar} from "react-icons/bi";

const FoodCard = ({ name,image,price,desc,rating,}) => {
  return (
    <>
    <div className=" font-bold w-[250px] p-5    bg-white flex flex-col gap-2 
     rounded-lg
    ">
    <img  src={image} alt=""
    className=" w-auto  h-[130px] hover:scale-110 rounded-lg cursor-grab
     transition-all duration-500 ease-in-out
    "
    />

    <div className="  flex justify-between">
      <h1>{name}</h1>
      {/* ctrl+alt+4 */}
      <span className=" text-green-600">
        ₹{price}</span>
    </div>
    <div className=" text-sm font-normal">
      <p>{desc.slice(0,50)}...</p>

    <div className=" flex justify-between">
      <span className=" flex items-center  gap-2 font-bold"><BiSolidStar className=" text-yellow-500"/> {rating}</span>
      <button className=" bg-green-500 border rounded-lg   p-1 text-white hover:bg-green-600">Add to cart</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default FoodCard