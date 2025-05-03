const Card = ({ item }) => {
  const { title, author, price, img } = item;
  return (
    <div className="card">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
