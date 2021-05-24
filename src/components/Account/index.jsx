import { IoPersonOutline } from "react-icons/io5";
import "./account.scss";
import { NavLink } from "react-router-dom";

export const Account = (props) => {
  return (
    <NavLink to={"/account"}>
      <div className="account__container">
        <IoPersonOutline size="1.8rem" className="account" />
        <span className="account__name">Account</span>
      </div>
    </NavLink>
  );
};
