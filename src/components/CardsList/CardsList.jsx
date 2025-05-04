import list from "../../data";
import Card from "./Card";
import "./CardsList.css";

const CardsList = () => {
  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CardsList;
