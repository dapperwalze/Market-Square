import { EmptyCartReaction } from "../EmptyCartReaction";
import "./cart.scss";
import { Footer } from "./../Footer/index";
import { BigCtaButton } from "../BigCtaButton";
export const Cart = () => {
  return (
    <>
      <div className="cart">
        <EmptyCartReaction className="sad__ smiley bigger__sad__smiley" />
      </div>
      <div className="cart__btn__container">
        <BigCtaButton
          text="Back to homepage"
          href="/"
          className="btn btn__yellow-button"
        />
      </div>

      <Footer />
    </>
  );
};
