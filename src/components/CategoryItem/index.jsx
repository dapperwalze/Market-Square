import "./categoryitem.scss";
import { Link } from "react-router-dom";

export const CategoryItem = (props) => {
  return (
    <div className="product__container">
      <Link className="product__link" to={props.linkTo}>
        <div className="product__image__container">
          <img
            className="product__image"
            alt={props.alt}
            src={props.productImageSource}
          />
        </div>
      </Link>

      <div className="product__details">
        <Link className="product__link" to="/product:id">
          <h3 className="product__name">{props.productName}</h3>
        </Link>

        <h4 className="product__price">NGN {props.productPrice}</h4>
        <div className="btn__container">
          <button className="btn btn__add" type="button">
            <span className="plus-sign">+</span> Add
          </button>
        </div>
      </div>
    </div>
  );
};
