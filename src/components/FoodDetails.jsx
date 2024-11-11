import { useEffect, useState } from "react";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});

  const URL = ` https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "362fd02dc7634cada7194fba100a21db";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      {foodId} {food.title}
      <img src={food.image} alt="food image" />
    </div>
  );
};

export default FoodDetails;
