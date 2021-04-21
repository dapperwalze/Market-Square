import { Account } from "../Account";
import { Cart } from "../Cart";
import { Logo } from "../Logo";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left-block">
        <Logo brandName="Market Square" brandTagline="find more, pay less" />
      </div>

      <div className="header__right-block">
        <Cart />
        <Account />
      </div>
    </header>
  );
};
