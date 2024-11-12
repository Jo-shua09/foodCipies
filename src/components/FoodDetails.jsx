import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = ` https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c98a30923c7b490d995da7462e56fa95";
  // 362fd02dc7634cada7194fba100a21db

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
      console.log(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.title}>{food.title}</h1>
        <img src={food.image} alt="food image" className={styles.image} />

        <div className={styles.recipeDetails}>
          <span>{food.readyInMinutes} Minutes</span>
          <span> {food.servings} servings</span>
          <span> {food.vegetarian ? "Vegetarain" : "Non-Vegetarian"}</span>
          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>

        <div className={styles.price}>
          $<span>{food.pricePerServing} Per serving</span>
        </div>

        <h2>Ingredents</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>{isLoading ? <p>Loading...</p> : food.analyzedInstructions[0].steps.map((step) => <li key={step.step}>{step.step}</li>)}</ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
