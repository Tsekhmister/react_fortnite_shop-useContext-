import { useContext } from "react";
import { ShopContext } from "../context";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const { order = [], handleCartShow } = useContext(ShopContext);

  const totalCost = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Shopping cart</li>
      {order.length ? (
        order.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Cart is empty</li>
      )}
      <li
        className="collection-item active"
        style={{ fontWeight: "bold", fontSize: "1.3rem" }}
      >
        Total cost: {totalCost} usd{" "}
      </li>

      <li
        className="collection-item"
        style={{ fontWeight: "bold", fontSize: "1.3rem" }}
      >
        <button className="btn-small btn-checkout">Checkout</button>
      </li>

      <i className="material-icons cart-close" onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
};
