import { useContext } from "react";
import { ShopContext } from "../context";

export const GoodsItem = ({ name, description, total: price, image, id }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToCart({
              id,
              name,
              price,
            })
          }
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.5rem" }}>
          {price + " usd"}
        </span>
      </div>
    </div>
  );
};
