import Item from "./item";

const ItemList = ({ food, isLoading }) => {
  return <div>{isLoading ? <p>Loading...</p> : food.extendedIngredients.map((item) => <Item item={item} />)}</div>;
};

export default ItemList;
