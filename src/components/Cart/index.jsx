import { GiShoppingCart } from "react-icons/gi";
import "./cart.scss";
export const Cart = () => {
  return (
    <div className="cart__container">
      <GiShoppingCart size="2rem" className="cart" />
      <span className="cart__name">Cart</span>
    </div>
  );
};
