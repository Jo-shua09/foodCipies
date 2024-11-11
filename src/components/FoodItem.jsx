import styles from "./fooditem.module.css";

const FoodItem = ({ food, setFoodId }) => {
  return (
    <div className={styles.itemContainer}>
      <img
        src={food.image}
        alt="food images"
        onClick={() => {
          setFoodId(food.id);
        }}
      />
      <p>{food.title}</p>
      <button
        onClick={() => {
          setFoodId(food.id);
        }}
      >
        View recipe
      </button>
    </div>
  );
};

export default FoodItem;
