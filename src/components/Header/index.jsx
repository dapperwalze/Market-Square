import { GiShoppingCart } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left-block">
        <Logo brandName="Market Square" brandTagline="find more, pay less" />
      </div>

      <div className="header__right-block">
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__list">
              <NavLink className="header__link" to={"/cart"}>
                <div className="cart__container">
                  <GiShoppingCart size="2rem" className="cartIcon" />
                  <span className="cart__name">Cart</span>
                </div>
              </NavLink>
            </li>
            <li className="header__list">
              <NavLink className="header__link" to={"/account"}>
                <div className="account__container">
                  <IoPersonOutline size="1.8rem" className="accountIcon" />
                  <span className="account__name">Account</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
