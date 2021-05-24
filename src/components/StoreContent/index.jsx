import { CartContent } from "../CartContent";
import { Categories } from "../Categories";
import { DisplayCategoryItems } from "../DisplayCategoryItems";
import "./storecontent.scss";
import { Footer } from "./../Footer/index";

export const StoreContent = () => {
  return (
    <>
      <div className="store__content">
        <Categories />
        <DisplayCategoryItems categoryName="Electronics" />
        <CartContent />
      </div>
      <Footer />
    </>
  );
};
