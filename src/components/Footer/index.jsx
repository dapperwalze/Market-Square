import DeliveryVan from "./delivery-van.png";
import Guarantee from "./guarantee.png";
import CustomerSupport from "./customer-support.png";
import { FaWhatsapp } from "react-icons/fa";
import "./footer.scss";
import { Logo } from "./../Logo/index";

export const Footer = () => {
  return (
    <>
      <div className="jumbotron blue__jumbotron">
        <div className="jumbotron__value__block jumbotron__delivery__block">
          <img
            className="delivery__van"
            alt="delivery services"
            src={DeliveryVan}
          ></img>
          <span className="value__type">Fast Delivery</span>
        </div>
        <div className="jumbotron__value__block jumbotron__guarantee__block">
          {" "}
          <img
            className="buyer__protection"
            alt="buyer protection"
            src={Guarantee}
          ></img>
          <span className="value__type">Buyer Protection</span>
        </div>
        <div className="jumbotron__value__block jumbotron__customer-support__block">
          <img
            className="customer__support"
            alt="24 hours customer support"
            src={CustomerSupport}
          ></img>
          <span className="value__type">Customer Support</span>
        </div>
      </div>
      <div className="jumbotron white__jumbotron">
        <Logo brandName="Market Square" brandTagline="find more, pay less" />
      </div>
      <div className="jumbotron bottom__jumbotron">
        <a className="whatsapp__chat" href="/">
          <FaWhatsapp className="whatsapp__icon" size={"1.3rem"} /> Chat with us
        </a>
      </div>
    </>
  );
};
