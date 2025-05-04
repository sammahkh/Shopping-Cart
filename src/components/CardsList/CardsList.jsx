import list from "../../data";
import Card from "./Card";
import "./CardsList.css";

const CardsList = ({ handleAddToCart }) => {
  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleAddToCart={handleAddToCart} />
      ))}
    </section>
  );
};

export default CardsList;
