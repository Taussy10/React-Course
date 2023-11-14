const CategoryMenu = () => {
  return (
    <>
    <h1 className="m-4 font-bold text-xl">Find the best food</h1>
    <div className=" m-3 ">
    <button className=" px-3 py-2 border  border-black m-2 rounded-lg bg-gray-300 font-bold  hover:bg-green-500 hover:text-white ">All</button>
    <button className=" px-3 py-2 border  border-black m-2 rounded-lg bg-gray-300 font-bold  hover:bg-green-500 hover:text-white ">Lunch</button>
    <button className=" px-3 py-2 border  border-black m-2 rounded-lg bg-gray-300 font-bold  hover:bg-green-500 hover:text-white ">Breakfast</button>
    <button className=" px-3 py-2 border  border-black m-2 rounded-lg bg-gray-300 font-bold  hover:bg-green-500 hover:text-white ">Dinner</button>
    <button className=" px-3 py-2 border  border-black m-2 rounded-lg  bg-gray-300 font-bold  hover:bg-green-500 hover:text-white ">Snacks</button>
    </div>
    </>
  )
}

export default CategoryMenu