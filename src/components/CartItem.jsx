import { useContext } from "react";
import { ShopContext } from "../context";

export const CartItem = ({
  id,
  name,
  price,
  quantity,
}) => {

  const {removeFromCart , incQuantity, decQuantity } = useContext(ShopContext);

  return (
    <li href="#!" className="collection-item">
      {name} {price} x{" "}
      <i className="material-icons cartIcon-quantity" onClick={() => decQuantity(id)}>
        remove
      </i>{" "}
      {quantity}{" "}
      <i className="material-icons cartIcon-quantity" onClick={() => incQuantity(id)}>
        add
      </i>{" "}
      = {price * quantity} usd
      <span className="secondary-content" onClick={() => removeFromCart(id)}>
        <i className="material-icons cartItem-close">close</i>
      </span>
    </li>
  );
};
