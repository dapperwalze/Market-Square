import { Badge } from "../Badge";
import { EmptyCartReaction } from "../EmptyCartReaction";
import "./cartcontent.scss";

export const CartContent = () => {
  return (
    <aside className="cart__content">
      <h2 className="cart__content__header">
        Cart <Badge numberOfItems={0} />
      </h2>
      <EmptyCartReaction />
    </aside>
  );
};
