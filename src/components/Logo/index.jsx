import { IoStorefrontOutline } from "react-icons/io5";
import "./logo.scss";

export const Logo = ({ brandName, brandTagline }) => {
  return (
    <a className="header__logo-link" href="/">
      <div className="header__logo-block">
        <div className="header__logo-container">
          <IoStorefrontOutline className="logo" size={"2.5rem"} />
        </div>
        <div className="header__brand-name-container">
          <h1 className="header__brand-name">{brandName}</h1>
          <span className="header__brand-tag-line">{brandTagline}</span>
        </div>
      </div>
    </a>
  );
};
