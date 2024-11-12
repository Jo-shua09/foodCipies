import styles from "./item.module.css";

const Item = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img src={`https://spoonacular.com/cdn/ingredients_100×100/` + item.image} alt="" />
      </div>

      <div className={styles.nameContainer}>
        <h3>{item.name}</h3>
        <h3>
          {item.amount} <span>{item.unit}</span>
        </h3>
      </div>
    </div>
  );
};

export default Item;
