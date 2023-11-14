import FoodCard from "./FoodCard";
import FoodData from "../../Data/Data";

const FoodItems = () => {
  return (
    <div
      className=" flex flex-wrap  gap-10
     mx-10 justify-center my-10
    "
    >
      {
        // Use map method to giving data to make reuseable comps also data transfered through map function and id is for unique value
        FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              image={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              //  category={food.category}
            />
          );
        })
      }
    </div>
  );
};

export default FoodItems;
