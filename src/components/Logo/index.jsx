import { IoStorefrontOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./logo.scss";

export const Logo = ({ brandName, brandTagline }) => {
  return (
    <NavLink className="header__logo-link" exact={true} to={"/"}>
      <div className="header__logo-block">
        <div className="header__logo-container">
          <IoStorefrontOutline className="logo" size={"2.5rem"} />
        </div>
        <div className="header__brand-name-container">
          <h1 className="header__brand-name">{brandName}</h1>
          <span className="header__brand-tag-line">{brandTagline}</span>
        </div>
      </div>
    </NavLink>
  );
};
