import { IoPersonOutline } from "react-icons/io5";
import "./account.scss";

export const Account = (props) => {
  return (
    <div className="account__container">
      <IoPersonOutline size="1.8rem" className="account" />
      <span className="account__name">Account</span>
    </div>
  );
};
