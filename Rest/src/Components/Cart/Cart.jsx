import FoodData from "../../Data/Data";

import { AiOutlineCloseCircle } from "react-icons/ai";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <>
    <aside className=' fixed right-0 top-0 w-full md:w-[20vw]  h-full  bg-white ' >

      <div className=" flex  justify-between  items-center mx-2  p-2    ">

        <span className=" text-xl font-bold text-gray-800">My Order</span>
        <AiOutlineCloseCircle className=" border-gray-600 hover:text-red-600  cursor-pointer  "/>
      </div>




<CartItem/>
{/* {
FoodData.map((food) => {
          return (
            <CartItem
              key={food.id}
              id={food.id}
              image={food.img}
              name={food.name}
              price={food.price}
              //  category={food.category}
            />
          );
        })
      } */}

     



    <div className=" flex flex-col fixed  bottom-0 mb-2">
    <span className=" text-sm font-semibold text-gray-800">Items: {}</span>
    <span className=" text-sm font-semibold text-gray-800">Total Amount: {}</span>
    {/*md:w-[20vw] : when the screen matches minimum 768px then this will apply otherwise
      w-[100vw]  */}
    <button className="  text-2xl  text-white bg-green-500 rounded-lg w-[100vw] md:w-[20vw]  h-10  
      ">Place Order</button>
    </div>
   

    
    </aside>
    </>
  )
}

export default Cart