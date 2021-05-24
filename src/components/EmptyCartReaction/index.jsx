import SadSmiley from "./sad-smiley.jpg";
import "./emptycartreaction.scss";

export const EmptyCartReaction = ({ className }) => {
  return (
    <div className="reaction__container">
      <img className={className} alt="sad smiley" src={SadSmiley}></img>
      <div className="reaction__message__container">
        <h3 className="header__reaction-message">It's empty here</h3>
        <p className="paragraph__reaction-message">
          Start shopping to add items to your cart
        </p>
      </div>
    </div>
  );
};
