import "./productdetails.scss";
import ProductImage from "./mouse.jpg";
import HeadPhone from "./RelatedProduct/head-phone.jpg";
import iPhone from "./RelatedProduct/iPhone-11.jpg";
import { Footer } from "../Footer";
import { BigCtaButton } from "../BigCtaButton";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { ProductCountToggle } from "./../ProductCountToggle/index";
import { RelatedProduct } from "./RelatedProduct";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export const ProductDetails = () => {
  return (
    <>
      <div className="selected__product__details__container">
        <div className="selected__product__details__left-block">
          <img
            alt="productImage"
            className="product__details__image"
            src={ProductImage}
          />
        </div>
        <div className="selected__product__details__right-block">
          <h1 className="selected__product__name">
            Norbury Scandinavian Wood Leg Ottoman
          </h1>
          <p className="selected__product__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus
            enim, rhoncus ut interdum et, convallis ut enim. Etiam ut nulla eu
            nibh ultricies iaculis id sed arcu. Sed pharetra felis efficitur
            consectetur consequat. Fusce consectetur, mi vel fringilla placerat,
            elit lorem blandit magna, at posuere orci ante in tellus
          </p>
          <div className="selected__product__price__container">
            <div className="selected__product__price">
              <h5 className="current__price">NGN 76,500</h5>
              <h5 className="old__price">NGN 100,000</h5>
              <ProductCountToggle />
            </div>

            <div className="selected__product__percent-discount__container">
              <Badge className="red__badge" numberOfItems="-20%" />
            </div>
          </div>

          <div className="selected__product__cta__buttons__container">
            <Button
              buttonClassName="btn btn__add__to__cart"
              buttonText="Add to Cart"
              buttonType="button"
            />
            <BigCtaButton
              text="Buy Now"
              href="/cart"
              className="btn btn__yellow-button btn__buy-now"
            />
          </div>
        </div>
      </div>
      <div className="related__products__category__container">
        <div className="related__products__category__header__container">
          <h3 className="related__products__category__header">
            RELATED PRODUCTS
          </h3>
          <div className="arrow__container">
            <button type="button" className="left__arrow">
              <FiChevronLeft className="left" size="1.5rem" color={"#fff"} />
            </button>
            <button type="button" className="right__arrow">
              <FiChevronRight className="right" size="1.5rem" color={"#fff"} />
            </button>
          </div>
        </div>

        <div className="products__block">
          <Link className="product__link" to="/product:id">
            <RelatedProduct
              src={HeadPhone}
              alt="Related Product"
              productName="Norbury Scandinavian Wood Leg Ottoman "
            />
          </Link>

          <Link className="product__link" to="/product:id">
            {" "}
            <RelatedProduct
              src={iPhone}
              alt="Related Product"
              productName="Norbury Scandinavian Wood Leg Ottoman "
            />
          </Link>

          <Link className="product__link" to="/product:id">
            <RelatedProduct
              src={HeadPhone}
              alt="Related Product"
              productName="Norbury Scandinavian Wood Leg Ottoman "
            />
          </Link>

          <Link className="product__link" to="/product:id">
            <RelatedProduct
              src={iPhone}
              alt="Related Product"
              productName="Norbury Scandinavian Wood Leg Ottoman "
            />
          </Link>

          <Link className="product__link" to="/product:id">
            <RelatedProduct
              src={HeadPhone}
              alt="Related Product"
              productName="Norbury Scandinavian Wood Leg Ottoman "
            />
          </Link>

          <Link className="product__link" to="/product:id">
            <RelatedProduct
              src={iPhone}
              alt="Related Product"
              productName="Norbury Scandinavian Wood Leg Ottoman "
            />
          </Link>

          <Link className="product__link" to="/product:id">
            <RelatedProduct
              src={HeadPhone}
              alt="Related Product"
              productName="Norbury Scandinavian Wood Leg Ottoman "
            />
          </Link>

          <Link className="product__link" to="/product:id">
            <RelatedProduct
              src={iPhone}
              alt="Related Product"
              productName="Norbury Scandinavian Wood Leg Ottoman "
            />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
